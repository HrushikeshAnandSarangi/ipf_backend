// models/Member.js
const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
  name: String,
  phoneNumber: String,
  email: String,
  religion: String,
  whyJoin: String,
  address: String,
  state: String,
  district: String,
  pincode: String,
  verification: {
    type:String,
    default:"Not Verified"
  },
}, { timestamps: true });

module.exports = mongoose.model('Member', memberSchema);
