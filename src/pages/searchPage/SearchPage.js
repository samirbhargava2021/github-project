import React, { useState } from "react";
import { gql, useQuery } from "@apollo/client";
import "./SearchPage.scss";
import Button from "../../commonComponents/button/Button";
import ReposList from "../../components/searchResultsContainer/ReposList";
import Spinner from "../../commonComponents/spinner/Spinner";
import SearchInput from "../../components/search/SearchInput";
import ErrorMessaging from "../../commonComponents/ErrorMessaging/ErrorMessaging";
import { Queries } from '../../queries/Queries';
import HandleMore from "../../components/handleMore/HandleMore";
import Header from "../../components/header/Header";
import * as Utils from "../../UtilityFunctions/Utils";
const SearchPage = () => {
  const [searchText, setSearchText] = useState("rest-api");
  const [searchLimit, setsearchLimit] = useState(5);
  const { loading, error, data, fetchMore } = useQuery(Queries.GET_REPOSITORIES, {
    variables: { repositoryName: searchText, limit: searchLimit },
  });

  const handleSearch = (str) => {
    setSearchText(str);
    return Utils.handleInputSearch(fetchMore, str, searchLimit);
  };

  const handleMoreRepos = () => {
    return Utils.handlefetchMoreRepos(fetchMore, searchText, searchLimit, data.search.pageInfo.endCursor);
  };

  return (
    <div className="search-page">
      <Header />
      {loading && <Spinner />}
      {error && <ErrorMessaging error={error} />}
      {!loading && <SearchInput onSearch={handleSearch} />}
      {data && data.search.edges.length > 0 ? (
        <>
          <ReposList
            list={data.search.edges}
          />
          <HandleMore
            moreItems={handleMoreRepos}
            isNextPageExists={data.search.pageInfo.hasNextPage}
          />
        </>
      ) :
      (
        <ErrorMessaging error="0 results found, try again!" />
      )}
    </div>
  );
};

export default SearchPage;
