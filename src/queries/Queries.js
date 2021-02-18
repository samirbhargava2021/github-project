import { gql, useQuery } from "@apollo/client";
export const Queries = {
    GET_REPOSITORIES: gql`
    query getRepos(
      $repositoryName: String!
      $after: String
      $limit: Int!
    ) {
      search(
        query: $repositoryName
        first: $limit
        after: $after
        type: REPOSITORY
      ) {
        pageInfo {
          hasNextPage
          endCursor
        }
        repositoryCount
        edges {
          node {
            ... on Repository {
              owner {
                avatarUrl
                login
              }
              primaryLanguage {
                name
              }
              languages(first: 5) {
                nodes {
                  name
                }
              }
              name
              url
              description              
              stargazerCount
              updatedAt
              openGraphImageUrl
            }
          }
        }
      }
    }
  `,
};