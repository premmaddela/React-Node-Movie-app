const { gql } = require('apollo-server-express');
const { makeExecutableSchema } = require('@graphql-tools/schema');

// Define type definitions
const typeDefs = gql`
    type Query {
        hello: String
    }
`;

// Define resolvers
const resolvers = {
    Query: {
        hello: () => 'Hello, world!',
    },
};

// Create and export the schema
const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
});

module.exports = schema;