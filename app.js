var express = require('express');
var bodyParser = require('body-parser');
const morgan = require('morgan');
const winston = require('winston');
const dontenv = require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors');

var app = express()

app.use(cors());

// //sengrid parameters
// const sgMail = require('@sendgrid/mail');
// sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// var forceSsl = function (req, res, next) {
//     if ((req.headers['x-forwarded-proto'] !== 'https') && (app.get('env') === "'production'")) {
//         console.log('Succesfully Redirected to HTTPS')
//         return res.redirect(301, ['https://', req.get('Host'), req.url].join(''));
//     } else {
//       console.log( 'No need to re-direct to HTTPS' );
//       next();
//     }
//  };
//
// console.log(app.get('env'))
// app.use(forceSsl);

//code snippet for www. domain to non www. domain name
// function wwwRedirect(req, res, next) {
//     if ((req.headers.host.slice(0, 4) != 'www.') && (app.get('env') === "'production'")) {
//       console.log(req.headers.host);
//       console.log(req.protocol);
//       console.log(req.originalUrl);
//       return res.redirect(301, req.protocol + '://www.' + req.headers.host + req.originalUrl);
//       console.log("Redirect successful")
//     }
//     next();
// };
//
// app.set('trust proxy', true);
// app.use(wwwRedirect);

const url = process.env.MONGODB_URL_ATLAS;
const connect = mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});
connect.then((db) => {
  console.log('Connected correctly to server');
}, (err) => {winston.error(err); });

// app.use(morgan('combined', { stream: winston.stream }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

console.log(app.get('env'))

if (app.get('env') === 'production') {
  app.use('/', express.static(path.join(__dirname, '/client/build')));
}

if (app.get('env') === 'production') {
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
  });
}

app.use((req, res) => {
  res.status(200).send(req.originalUrl);
});

// * * * * *
app.listen(process.env.PORT, () => {
 console.log("Server listening on port " + process.env.PORT);
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // add this line to include winston logging
  console.error(`${err.status || 500} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);

  // render the error page
  res.status(err.status || 500);
  next(err);
});

module.exporst = app
