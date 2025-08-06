// models/Contribution.js
const mongoose = require('mongoose');

const contributionSchema = new mongoose.Schema({
  name: String,
  phoneNumber: String,
  email: String,
  religion: String,
  amount: String,
  verification: {
    type:String,
    default:"Not Verified"
  },
}, { timestamps: true });

module.exports = mongoose.model('Contribution', contributionSchema);
