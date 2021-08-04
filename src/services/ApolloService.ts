import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from '@apollo/client';

export const client = new ApolloClient({
  uri: process.env.REACT_APP_PIPEFY_API_URL,
  cache: new InMemoryCache(),
  headers: {
    authorization: `Bearer ${process.env.REACT_APP_PIPEFY_API_TOKEN}`
  }
});

export const GET_ORGANIZATIONS_QUERY = gql`
  {
    organizations {
        id
        name
    }
  }
`

export const GET_ALL_CARDS_QUERY = gql`
  query GetAllCards($pipeId: ID!){
    cards(pipe_id: $pipeId) {
      edges {
        node {
          id
          title
        }
      }
    }
  }
`

export const GET_PIPES_QUERY = gql`
  query GetPipesQuery {
    pipe_templates {
      id
      icon
      image
      name
    }
  }
`