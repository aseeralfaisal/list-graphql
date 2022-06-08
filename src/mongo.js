const { MongoClient, ServerApiVersion } = require("mongodb")
const dbUri = 'mongodb+srv://aseer:qscj7HkvgzQ0iTvG@cluster0.tfzip.mongodb.net/?retryWrites=true&w=majority'
const client = new MongoClient(dbUri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
const collection = client.db("list").collection("todos")

module.exports = { collection, client }