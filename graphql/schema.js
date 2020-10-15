const {buildSchema} = require('graphql')

module.exports = buildSchema(`
    type Todo {
        id: ID!
        title: String!
        done: Boolean!
        createdAt: String
        updatedAt: String
    }

    input InputTodo {
        title: String!
    }

    type Query {
        getTodos: [Todo!]!
    }

    type Mutation {
        createTodo(todo: InputTodo!): Todo!
        completeTodo(id: ID!): Todo!
        deleteTodo(id: ID!): Boolean!
    }
`)
