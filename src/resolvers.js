const axios = require('axios')
const uri = 'https://jsonplaceholder.typicode.com/todos'

const resolvers = {
    Query: {
        test: () => "Hello word",
        todos: async () => {
            const res = await axios.get(uri)
            return [...res.data]
        },
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
    },
}
module.exports = resolvers