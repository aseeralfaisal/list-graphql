const { ApolloServer } = require('apollo-server')
const typeDefs = require('./schema')
const axios = require('axios')
const uri = 'https://jsonplaceholder.typicode.com/todos'

const resolvers = {
  Query: {
    async todos() {
      const res = await axios.get(uri)
      return [...res.data]
    }
  },
  Todo: {
    userId(parent) {
      return todos.filter(todo => todo.userId = parent.userId)
    },
    id(parent) {
      return parent.id
    },
    title(parent) {
      return parent.title
    },
    completed(parent){
      return parent.completed
    }
  }
};

const server = new ApolloServer({ typeDefs, resolvers })
const listener = server.listen()
listener.then(({ url }) => console.log(`👌 Server ready at ${url}`))