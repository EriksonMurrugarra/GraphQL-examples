const express = require('express')
const bodyParser = require('body-parser')
const { graphqlExpress, graphiqlExpress } = require('graphql-server-express')
const schema = require('./schema')
const mongoConfig = require('./mongo-config')

const app = express()
app.use(bodyParser.json())

app.use('/graphql', 
    graphqlExpress({ schema }))

app.use('/graphiql',
    graphiqlExpress({
      endpointURL: '/graphql'
    }))

app.listen(5000, () => {
    console.log("The app is running on port 5000")
})