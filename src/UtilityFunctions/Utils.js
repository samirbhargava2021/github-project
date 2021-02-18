export const handleInputSearch = (fetchMore, str, searchLimit) => {
  fetchMore({
    variables: {
      repositoryName: str,
      limit: searchLimit,
    },
    updateQuery: (prev, { fetchMoreResult }) => {
      if (!fetchMoreResult) return prev;
      return fetchMoreResult;
    },
  });
};
export const handlefetchMoreRepos = (fetchMore, str, searchLimit, afterpoint) => {
  fetchMore({
    variables: {
      repositoryName: str,
      after: afterpoint,
      limit: searchLimit,
    },
    updateQuery: (prev, { fetchMoreResult }) => {
      if (!fetchMoreResult) return prev;
      return Object.assign({}, prev, {
        ...fetchMoreResult,
        search: {
          ...fetchMoreResult.search,
          edges: [...prev.search.edges, ...fetchMoreResult.search.edges],
        },
      });
    },
  });
};