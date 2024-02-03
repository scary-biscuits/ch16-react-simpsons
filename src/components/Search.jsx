import React, { Component } from "react";
class Search extends Component {
  state = {};
  render() {
    return (
      <div className="search">
        <input
          type="text"
          onInput={this.props.onSearchInput}
          placeholder="Enter a Springfield resident..."
          name="search"
          id="search"
        />
        <div className="buttons">
          <button onClick={this.props.onSearchClick}>Filter</button>
          <button onClick={this.props.getApiData}>Reset</button>
          <button onClick={this.props.onSortClick}>Reverse</button>
          <button onClick={this.props.onToggleLikedClick}>Liked</button>
        </div>
      </div>
    );
  }
}

export default Search;
