module.exports = `
  enum CardType {
    VISA
    MASTERCARD
  }

  # This is a Credit Card Entity
  type Card {
    _id: ID!
    name: String!
    bank: Bank
    close: Int
    pay: Int
    tea: Float
    ctype: CardType
    tem: Float @deprecated(reason: "Difficult to calculate")
  }

  input NewCardInput {
    name: String!
    bank: String!
    close: Int
    pay: Int
    tea: Float
    ctype: CardType
  }
`