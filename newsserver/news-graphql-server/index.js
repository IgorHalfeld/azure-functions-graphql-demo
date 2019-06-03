const {
  ApolloServer,
  gql,
} = require('apollo-server-azure-functions');
const { getTopHeadlines } = require('./newsApi');
    

const typeDefs = gql`
  scalar Date

  type SourceObject {
    id: String,
    name: String,
  }

  type NewsObject {
    source: SourceObject,
    author: String,
    title: String,
    description: String,
    url: String,
    urlToImage: String,
    publishedAt: Date,
    content: String
  }

  type Response {
    status: String,
    totalResults: Int,
    articles: [NewsObject]
  }

  type Query {
    getTopHeadlines: Response
  }
`;

const resolvers = {
  Query: {
    getTopHeadlines: async () => {
      const { data: response } = await getTopHeadlines();
      return response;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

module.exports = server.createHandler({
  cors: true,
});