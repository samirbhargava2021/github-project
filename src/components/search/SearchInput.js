import React, { useState } from "react";
import Button from "../../commonComponents/button/Button";
import "./SearchInput.scss";

const SearchInput = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("");
  return (
    <div className="search-container">
      <input
        type="search"
        name="searchText"
        value={searchText}
        className="search-container__search-input"
        aria-label="search"
        placeholder="Enter Repository name.."
        onChange={(event) => setSearchText(event.target.value)}
      />
      <Button 
        events={() => onSearch(searchText)}
        data={{
          theme:"light",
          text:"Search"
        }}
        options={{
            buttonSize:"small"
        }}
      />
    </div>
  );
};

export default SearchInput;
