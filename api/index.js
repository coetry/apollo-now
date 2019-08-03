const cors = require("micro-cors")();
const micro = require("micro");
const { ApolloServer, gql } = require("apollo-server-micro");

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => "Hello world!"
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

module.exports = micro(cors(server.createHandler()));
