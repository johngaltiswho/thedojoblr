const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('./cors');

const Enquiry = require('../models/enquiry');

const enquiryRouter = express.Router();
enquiryRouter.use(bodyParser.json());

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

enquiryRouter.route('/')
.options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
// .get(cors.cors,(req, res, next) => {
// 	res.send('enquiry');
// })
.post((req, res, next) => {
	console.log(req.body)
	Enquiry.create(req.body)
	.then((enquiry) => {
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
			subject: 'New Contact',
			text: 'Email:' + req.body.email +'\n\nPhone:' + req.body.phone  + '\n\nSubject:' + req.body.subject +'\n\nMessage:' + req.body.message
		}];
		sgMail.send(msg)
			.then(() => console.log('Mail sent successfully'))
			.catch((err) => next(err));
		res.statusCode = 200;
		console.log(enquiry);
		res.send(enquiry)
	}, (err) => next(err))
	.catch((err) => next(err));
});

module.exports = enquiryRouter;
