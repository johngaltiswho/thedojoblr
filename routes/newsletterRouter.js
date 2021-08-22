const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('./cors');

const Newsletter = require('../models/newsletter');

const newsletterRouter = express.Router();
newsletterRouter.use(bodyParser.json());

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

newsletterRouter.route('/')
.options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
.get(cors.cors,(req, res, next) => {
})
.post((req, res, next) => {
	console.log(req.body)
	Newsletter.create(req.body)
	.then((newsletter) => {
		const msg = [
			{
			to: {
				email: req.body.email,
				name: req.body.name
			},
			from: {
				email: 'hello@thedojoblr.com',
				name: 'The Dojo',
			},
			templateId: 'd-be28807299a248f59b27aebb845c1b18',
			tracking_settings: {
				subscription_tracking: {
					enable: true
				},
				open_tracking:{
					enable: true
				}
			},
			dynamic_template_data: {
				name: req.body.name
			},
			asm: {
				group_id:8104
			}
		},
		{
			to: 'umamaheshwar1193@gmail.com',
			from: {
				email: 'hello@thedojoblr.com',
				name: 'The Dojo',
			},
			subject: 'New Subscriber',
			text: 'Email:' + req.body.email
		}];
		sgMail.send(msg)
			.then(() => console.log('Mail sent successfully'))
			.catch((err) => next(err));
		res.statusCode = 200;
		console.log(newsletter)
		res.send(newsletter)
	}, (err) => next(err))
	.catch((err) => next(err));
});

module.exports = newsletterRouter;
