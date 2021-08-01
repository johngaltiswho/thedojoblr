const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('./cors');
const sharedFunctions = require('./sharedFunctions.js');

const User = require('../models/user');

const userRouter = express.Router();
userRouter.use(bodyParser.json());

// const sgMail = require('@sendgrid/mail');
// sgMail.setApiKey(process.env.SENDGRID_API_KEY);

userRouter.route('/')
.options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
.get(cors.cors,(req, res, next) => {
	console.log("Entering Backend Route")
	User.findOne({email:req.query.email})
	.then((user) => {
		if(!user) {
			console.log("User not found! Adding user to database")
			User.updateOne({
				email: req.query.email
			},{
				$setOnInsert: {
					email: req.query.email
				}
			},{
				upsert:1
			})
			.then((userInfo) => {
				res.send(userInfo)
			}, (err) => next(err))
			.catch((err) => next(err));
		} else {
			console.log("User found!")
			res.send(user)
		}

	}, (err) => next(err))
	.catch((err) => next(err));
})
.post((req, res, next) => {

	var updateExpr = {
		name: req.body.name,
		phone: req.body.phone,
		bio: req.body.bio || "",
		"address.street1": req.body.street1 || "",
		"address.city": req.body.city || "",
		"address.state": req.body.state || "",
		"address.zip": req.body.zip || "",
		"address.country": req.body.country || "",
		email: req.body.email || "",
		status: "INACTIVE",
		"membership.startDate": req.body.startDate || "",
	}

	updateExpr = sharedFunctions.clean(updateExpr)

	if(req.body.adminPage) {
		User.findOneAndUpdate({
			email: req.query.email
		},{
			$set: updateExpr,
		},{
			new: true,
			upsert: true
		})
		.then((userInfo) => {
			console.log("successfully updated user")
			console.log(userInfo)
			res.send(userInfo)
		}, (err) => next(err))
		.catch((err) => next(err));

	} else {
		User.updateOne({
			email: req.query.email
		},{
			$set: updateExpr
		},{
			upsert: true
		})
		.then((userInfo) => {
			console.log(userInfo)
			res.send(userInfo)
		}, (err) => next(err))
		.catch((err) => next(err));
	}
})
.put((req, res, next) => {
	console.log(req.body)
	console.log(req.query.email)
	User.findOneAndUpdate({
		email: req.query.email
	},{
		$set: {
			paymentStatus: req.body.paymentStatus,
		},
	},{
	  new: true
	})
	.then((userInfo) => {
		console.log("successfully updated user")
		console.log(userInfo)
		res.json(userInfo)
	}, (err) => next(err))
	.catch((err) => next(err));
});

userRouter.route('/all-users')
.options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
.get(cors.cors,(req, res, next) => {
	console.log("Entering Backend Route")
	User.aggregate([
		{
			$lookup:
				{
					from: "orders",
					localField: "email",
					foreignField: "email",
					as: "orders",
				}
		}
	])
	.then((users) => {
		// console.log(users[0].orders)
		res.send(users)
	}, (err) => next(err))
	.catch((err) => next(err));

	// User.find({})
	// .then((users) => {
	// 	console.log(users)
	// 	res.send(users)
	// }, (err) => next(err))
	// .catch((err) => next(err));
})


module.exports = userRouter;
