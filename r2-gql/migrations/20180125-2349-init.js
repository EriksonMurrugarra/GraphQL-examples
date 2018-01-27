const Bank = require('../models/bank')
const Card = require('../models/card')

module.exports = {
  async up () {    
    // creating banks
    let banki = await Bank.create({ name: 'Interbank' })
    let bankb = await Bank.create({ name: 'BanBif' })
    let banks = await Bank.create({ name: 'Scotiabank' })

    // creating cards
    await Card.create({
      name: 'American Express Blue',
      bank: banki._id,
      close: 10,
      pay: 7,
      tea: 12.4,
      ctype: 'MASTERCARD'
    })
    await Card.create({
      name: 'BanBif Signature',
      bank: bankb._id,
      close: 3,
      pay: 18,
      tea: 12.4,
      ctype: 'VISA'
    })
    await Card.create({
      name: 'AADvantage Black',
      bank: banks._id,
      close: 10,
      pay: 7,
      tea: 12.4,
      ctype: 'MASTERCARD'
    })

  },

  async down () {
    await Card.remove({})
    await Bank.remove({})
  },
};
