const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email);
};

var validateNumber = function(phone) {
  var re = /^[6-9]\d{9}$/;
  return re.test(phone);
}

const enquirySchema = new Schema({
    name: {
      type: String,
      required: true,
      required: 'Please enter your name',
      trim: true
    },
    email: {
        type: String,
        required: true,
        required: 'Please enter your email',
        trim: true,
        lowercase:true,
        validate: [validateEmail, 'Please fill a valid email address!' ]
    },
    phone: {
        type: String,
        required: true,
        required: 'Please enter your phone number',
        validate: [validateNumber, 'Please fill a valid phone number!' ]
    },
    sub: {
      type: String,
      required: true,
      required: 'Please enter a subject'
    },
    msg: {
      type: String,
      required: true,
      required: 'Please enter a message'
    }
},{
    timestamps: true
});

var enquiry = mongoose.model('enquiry', enquirySchema);

module.exports = enquiry;
