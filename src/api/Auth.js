import { ApolloClient, HttpLink, ApolloLink, InMemoryCache, from } from '@apollo/client';
import { Constants } from '../constants/Constants';

//https://www.apollographql.com/docs/react/networking/advanced-http-networking/

const httpLink = new HttpLink({ uri: Constants.GITHUB_API });

const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      authorization: `bearer ${Constants.BEARER_TOKEN}`,
    }
  }));

  return forward(operation);
})

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([
    authMiddleware,
    httpLink
  ]),
});

export default client;
