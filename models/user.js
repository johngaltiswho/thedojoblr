const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
      type: String,
    },
    email: {
        type: String,
    },
    phone: {
        type: Number,
    },
    profilePicture: {
      type: String,
    },
    dob: {
      type: Date,
    },
    bio: {
      type: String,
    },
    address:{
      street1:{
        type: String
      },
      street2:{
        type: String
      },
      city:{
        type: String
      },
      state:{
        type: String
      },
      zip:{
        type: String
      },
      country:{
        type: String
      }
    },
    membership: {
      membershipType: {
        type: String
      },
      startDate: {
        type: Date
      },
      endDate: {
        type: Date
      },
    },
    tenantId:  {
      type: String
    },
    role: {
      type: String
    }
},{
    timestamps: true
});

var User = mongoose.model('User', userSchema);

module.exports = User;
