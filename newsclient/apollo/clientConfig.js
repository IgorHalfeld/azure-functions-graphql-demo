import { InMemoryCache } from 'apollo-cache-inmemory'

export default function() {
  return {
    httpLinkOptions: {
      uri:
        'http://azure-function-graphql.azurewebsites.net/api/news-graphql-server',
      credentials: 'same-origin'
    },
    cache: new InMemoryCache()
  }
}
