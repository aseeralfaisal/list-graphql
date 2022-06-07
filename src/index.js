const { ApolloServer } = require('apollo-server-express')
const { ApolloServerPluginDrainHttpServer } = require('apollo-server-core')
const express = require('express')
const http = require('http')
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
    completed(parent) {
      return parent.completed
    }
  }
};

async function startApolloServer() {
  const app = express();
  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });
  await server.start();
  server.applyMiddleware({ app });
  await new Promise(resolve => httpServer.listen({ port: 4000 }, resolve));
  console.log(`👌 Server ready at http://localhost:4000${server.graphqlPath}`);
}
startApolloServer()