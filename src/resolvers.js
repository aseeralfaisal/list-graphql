const { collection, client } = require('./mongo')

const resolvers = {
    Query: {
        test: () => "Hello word",
        todos: async () => {
            return await collection.find().toArray()
        },
    },
    Todo: {
        _id(parent) {
            return parent._id
        },
        title(parent) {
            return parent.title
        },
    },
    Mutation: {
        async addTodo(_, { title }) {
            await collection.insertOne({ title })
            const inserted = await collection.findOne({ title })
            return inserted
        },
        async deleteTodo(parent, { title }) {
            const deleted = await collection.deleteOne({ title })
            return await collection.find().toArray()
        }
    },
}
module.exports = resolvers