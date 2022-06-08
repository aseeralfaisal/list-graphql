const { gql } = require('apollo-server-express')

const typeDefs = gql`
type Todo {
  _id: String!
  title: String!
}
type Mutation {
  addTodo(title: String): Todo!
  deleteTodo(title: String): [Todo!]
}
type Query {
  test: String!
  todos: [Todo!]
}
`

module.exports = typeDefs
