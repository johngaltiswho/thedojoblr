'use strict'
require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('./cors');

const Razorpay = require('razorpay');
var crypto = require('crypto');
var encryptionHelper = require('../encrypt-decrypt');

var rzp = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID, // your `KEY_ID`
  key_secret: process.env.RAZORPAY_KEY_SECRET // your `KEY_SECRET`
});

const razorpayRouter = express.Router();
razorpayRouter.use(bodyParser.json());

razorpayRouter.route('/')
.options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
.post(cors.cors,(req, res, next) => {
  var name = req.body.name
  var amount = req.body.amount;
  var email = req.body.email;
  var contact = req.body.contact;
  var orderNumber = req.body.orderNumber;
  console.log(amount, name, email)
  amount = Math.round(amount * 100);
  var options = {
    amount: amount,  // amount in the smallest currency unit
    currency: "INR",
    receipt: orderNumber,
    payment_capture: '1'
  };
  // rzp.customers.create({
  //   name: name,
  //   email: email,
  //   contact: contact,
  // }).then((data) => {
  //   console.log(data);
  // }).catch((error) => {
  //   console.error('User not created');
  //   res.status(400);
  // });
  rzp.orders.create(options)
  .then((order) => {
		console.log("calling backend router")

		res.json(order)
  }, (err) => next(err))
  .catch((error) => {
    winston.error('Payment Failed:', err);
  })
  // checkoutForm["body"].amount = amount;
  // console.log(amount);
  /*.then((decText) => {
    console.log(decText);
  }, (err) => next(err))
  .catch((err) => {
    console.log('Decryption un-successful' + error.message);
    res.status(400);
  });*/
});


razorpayRouter.route('/confirmation')
.options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
.post(cors.cors,(req,res,next) => {
	console.log("confirmation backend")
	console.log(req.body)
  var paymentId = req.body.razorpayPaymentId;
  var razorpaySignature = req.body.razorpaySignature;
  var orderId = req.body.orderCreationId;
  var generate_signature = crypto.createHmac("sha256", process.env.RAZORPAY_KEY_SECRET).update(orderId + "|" + paymentId).digest("hex");
  console.log("generated signature: " + generate_signature)
  console.log("razorpay signature: " + razorpaySignature)
  if (generate_signature == razorpaySignature) {
    console.log('Payment Sucessesful');
  } else {
    console.error('Payment un-successful');
  }
});

razorpayRouter.route('/payment-confirmation')
.options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
.post(cors.cors,(req,res,next) => {
  res.status = 200
  res.send();
  var orderId = req.body.payload.order.entity.receipt;
  var orderNo = orderId.slice(orderId.length - 3);
  var url = "https://app.ecwid.com/api/v3/19337338/orders/" + orderNo + "?token=" + process.env.ECWID_ACCESS_TOKEN;
  const options = {
    method: 'PUT',
    uri: url,
    headers: {
      'Content-type': 'application/json'
    },
    body: {
      "paymentStatus": "PAID"
    },
    json: true
  };
  request(options)
  .then((body) => {
    console.log('Succesfully Updated Order Status');
  }).catch((error) => {
    res.status = 200;
    console.log("Error in Updating: " + error)
  })
});

razorpayRouter.route('/payment-confirmation-paytm')
.options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
.post(cors.cors,(req,res,next) => {
  res.status = 200;
  res.send();
  console.log("Webhook Called" + req.body)
  var orderId = req.body.LINKNOTES;
  var orderNo = orderId.slice(orderId.length - 3)
  var url = "https://app.ecwid.com/api/v3/19337338/orders/" + orderNo + "?token=" + process.env.ECWID_ACCESS_TOKEN_PAYTM;
  const options = {
    method: 'PUT',
    uri: url,
    headers: {
      'Content-type': 'application/json'
    },
    body: {
      "paymentStatus": "PAID"
    },
    json: true
  };
  request(options)
  .then((body) => {
    console.log('Succesfully Updated Order Status')
  }).catch((error) => {
    res.status = 200;
    console.log("Error in Updating: " + error)
  })
});

module.exports = razorpayRouter;
