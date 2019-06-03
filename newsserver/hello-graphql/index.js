const {
  ApolloServer,
  gql,
} = require('apollo-server-azure-functions');
  
const resolvers = {
  Query: {
    hello: (_, args) => {
      const message = `Hello ${args.name}`;
      return { message }
    },
  },
};
  
const schema = gql `
  type Query {
    hello(name: String!): HelloReturn
  }
  type HelloReturn {
    message: String
  }
`;

const server = new ApolloServer({
  typeDefs: schema,
  resolvers
});

module.exports = server.createHandler();