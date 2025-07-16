import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://api.graph.cool/simple/v1/cixos23120m0n0173veiiwrjr', // public HackerNews API
  cache: new InMemoryCache(),
});

export default client;
