const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    orderId: {
      type: String
    },
    name: {
      type: String,
    },
    email: {
        type: String,
    },
    phone: {
        type: Number,
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
    amount: {
      type: Number
    },
    tax: {
      type: Number
    },
    membership: {
      type: String
    },
    invoice: {
      type: String
    },
    tenantId: {
      type: String
    }
},{
    timestamps: true
});

var Order = mongoose.model('Order', orderSchema);

module.exports = Order;
