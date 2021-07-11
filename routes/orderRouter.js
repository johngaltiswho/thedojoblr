const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('./cors');

const Order = require('../models/order');

const orderRouter = express.Router();
orderRouter.use(bodyParser.json());

// const sgMail = require('@sendgrid/mail');
// sgMail.setApiKey(process.env.SENDGRID_API_KEY);

orderRouter.route('/')
.options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
.get(cors.cors,(req, res, next) => {
	Order.find({email: req.query.email})
	.then((orders) => {
		res.send(orders)
	}, (err) => next(err))
  .catch((error) => {
    console.log('', error);
  })
})
.post((req, res, next) => {
	console.log(req.body)
	Order.create(req.body)
	.then((order) => {
		// const msg = [{;
		// 	to: {
		// 		email: req.body.email,
		// 		name: req.body.name
		// 	},
		// 	from: {
		// 		email: 'noreply@stalksnspice.com',
		// 		name: 'Stalks N Spice',
		// 	},
		// 	templateId: 'd-affb9e1cc3ba47dea7ff27d7c5311552',
		// 	tracking_settings: {
		// 		subscription_tracking: {
		// 			enable: true
		// 		},
		// 		open_tracking:{
		// 			enable: true
		// 		}
		// 	},
		// 	dynamic_template_data: {
		// 		name: req.body.name
		// 	},
		// 	asm: {
		// 		group_id:8104
		// 	}
		// },
		// {
		// 	to: 'umamaheshwar1193@gmail.com',
		// 	from: {
		// 		email: 'noreply@stalksnspice.com',
		// 		name: 'Stalks N Spice',
		// 	},
		// 	subject: 'New Contact',
		// 	text: 'Email:' + req.body.email +'\n\nPhone:' + req.body.phone  + '\n\nSubject:' + req.body.subject +'\n\nMessage:' + req.body.message
		// }];
		// sgMail.send(msg)
		// 	.then(() => console.log('Mail sent successfully'))
		// 	.catch((err) => next(err));
		res.statusCode = 200;
		console.log(order);
		res.send(order)
	}, (err) => next(err))
	.catch((err) => next(err));
});

module.exports = orderRouter;
