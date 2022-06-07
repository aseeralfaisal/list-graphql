const { gql } = require('apollo-server-express')

const typeDefs = gql`
type Todo {
  userId: Int
  id: Int
  title: String
  completed: Boolean
}
type Query {
  test: String
  todos: [Todo]
}`

module.exports = typeDefs
