import express from 'express'
import {ApolloServer, gql} from 'apollo-server'

const app = express()
const port = process.env.PORT || 3003

const typeDefs = gql`
  type Query {
    hello: String
  }
`

const resolvers = {
    Query: {
        hello: () => 'Welcome to your GraphQL server :)'
    }
}

interface Artist {
    name: string,
    song: string,
    streams: number
}

const artists: Artist[] = [
    {
        name: 'Nurko',
        song: 'Sideways',
        streams:29053096 
    },
    {
        name: 'The Rolling Stones',
        song: 'Paint it Black',
        streams: 1483905842 
    }
]
//typegraph?? Apollo
const normalResponse = {
    msg: 'App running.'
}
const exceptionalResponse= {
    msg: 'Wow! you\'re a deep digger'
}
app.use('/', (req, res) => {
    res.json(normalResponse)
})

app.use('*', (req, res) => {
    
    res.json(exceptionalResponse)
})

const server = new ApolloServer({
    typeDefs,
    resolvers,
})

server.listen({port}).then(({url}) => {console.log(`Server ready at ${url}`)})
