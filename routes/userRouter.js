const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const User = require('../models/user');

const userRouter = express.Router();
userRouter.use(bodyParser.json());

// const sgMail = require('@sendgrid/mail');
// sgMail.setApiKey(process.env.SENDGRID_API_KEY);

userRouter.route('/')
.get((req, res, next) => {
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
	console.log(req.body)
	User.updateOne({
		email: req.query.email
	},{
		$set: {
			name: req.body.name,
			phone: req.body.phone,
			bio: req.body.bio,
			"address.street1": req.body.street1,
			"address.city": req.body.city,
			"address.state": req.body.state,
			"address.zip": req.body.zip,
			"address.country": req.body.country,
		}
	})
	.then((userInfo) => {
		res.send(userInfo)
	}, (err) => next(err))
	.catch((err) => next(err));

});

module.exports = userRouter;