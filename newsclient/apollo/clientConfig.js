import { InMemoryCache } from 'apollo-cache-inmemory'

export default function() {
  return {
    httpLinkOptions: {
      uri:
        'https://azure-functions-graphql-news.azurewebsites.net/api/news-graphql-server',
      credentials: 'same-origin'
    },
    cache: new InMemoryCache()
  }
}
