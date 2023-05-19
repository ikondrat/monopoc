'use client'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { Search } from './components/Search'

const client = new ApolloClient({
  uri: 'http://localhost:8080/v1/graphql', //process.env.GRAPHQL_ENDPOINT,
  cache: new InMemoryCache()
})

export default function Home() {
  return (
    <main>
      <ApolloProvider client={client}>
        <div>Search will be here</div>
        <Search value="Casa" />
      </ApolloProvider>
    </main>
  )
}
