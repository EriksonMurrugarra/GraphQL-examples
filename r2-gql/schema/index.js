const { makeExecutableSchema } = require('graphql-tools')
const resolvers = require('../resolvers')
const cardSchema = require('./card')
const bankSchema = require('./bank')

const typeDefs = `

  union SearchResult = Card

  type Query {
    cards: [Card]
    banks: [Bank]
    card(id: String): Card
    bank(id: String): Bank
    searchByCardType(ctype: CardType): [Card]
    search(query: String!): [Card]
  }

  type Mutation {
    bankAdd(name: String!): Bank
    cardAdd(card: NewCardInput): SearchResult
  }

`

const schema = makeExecutableSchema({
    typeDefs: [typeDefs, cardSchema, bankSchema],
    resolvers
})

module.exports = schema