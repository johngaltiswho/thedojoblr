const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email);
};

const newsletterSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        required: 'Please enter your email',
        trim: true,
        lowercase:true,
        validate: [validateEmail, 'Please fill a valid email address!' ]
    }
},{
    timestamps: true
});

var Newsletter = mongoose.model('Newsletter', newsletterSchema);

module.exports = Newsletter;
