const Card = require('./models/card')
const Bank = require('./models/bank')

const resolvers = {
    Query: {
      cards: () => {
        return Card.find({}).populate('bank').exec()
      },
      banks: () => {
        return Bank.find({}).exec()
      },
      card: (rootValue, args) => {        
        return Card.findById({ _id: args.id }).exec()
      },
      bank: (rootValue, args) => {
        return Bank.findById({ _id: args.id }).exec()
      },
      searchByCardType: (_, args) => {
        return Card.find({ ctype: args.ctype })
      },
      search: (_, args) => {
        return [ Card.find({}).exec() ]
        
      }
    },
    SearchResult: {
      __resolveType: (obj) => {
        
        return "Card"
      }
    },
    Mutation: {
      bankAdd: (_, args) => {
        return Bank.create({name: args.name})
      },
      cardAdd: (_, args) => {
        return Card.create(args.card)
      }
    }
  }
  
module.exports = resolvers