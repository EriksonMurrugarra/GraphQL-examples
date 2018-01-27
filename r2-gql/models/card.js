const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CardSchema = new Schema({
  name: String,
  bank: {
    type: Schema.Types.ObjectId,
    ref: 'bank'
  },
  close: Number,
  pay: Number,
  tea: Number,
  ctype: {
    type: String,
    enum: ['VISA', 'MASTERCARD']
  }
})
  
module.exports = mongoose.model('card', CardSchema)