import React from "react";

const Search = (props) => {
  return (
    <div className="search">
      <input
        type="text"
        onInput={props.onSearchInput}
        onKeyDown={(e) => {
          if (e.key === "Enter") props.onSearchClick();
        }}
        placeholder="Enter a Springfield resident..."
        name="search"
        id="search"
      />
      <div className="buttons">
        <button onClick={props.onSearchClick}>Search</button>
        <button onClick={props.getApiData}>Reset</button>
        <button onClick={props.onSortClick}>Reverse</button>
        <button onClick={props.onToggleLikedClick}>Liked</button>
      </div>
    </div>
  );
};

export default Search;
