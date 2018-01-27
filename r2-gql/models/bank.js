const mongoose = require('mongoose')

const BankSchema = new mongoose.Schema({
  name: String,
})
  
module.exports = mongoose.model('bank', BankSchema)