import React, { Component } from "react";
import axios from "axios";
import Quotes from "./components/Quotes";
import "./App.css";

class App extends Component {
  state = { search: "", numLiked: 0 };

  getApiData = async () => {
    const { data } = await axios.get(
      `https://thesimpsonsquoteapi.glitch.me/quotes?count=50`
    );
    for (let i = 0; i < data.length; i++) {
      data[i].id = i;
      data[i].liked = false;
    }
    this.setState({ simpsons: data });
  };

  onDeleteItem = (id) => {
    const quotes = [...this.state.simpsons];
    const index = quotes.findIndex((item) => item.id === id);
    quotes.splice(index, 1);
    this.setState({ simpsons: quotes });
  };

  onSearchInput = (e) => {
    this.setState({ search: e.target.value });
  };

  onSearchClick = () => {
    const searchTerm = this.state.search.toLowerCase();
    const quotes = [...this.state.simpsons];
    const searchResults = [];

    for (let i = 0; i < quotes.length; i++) {
      let test = quotes[i].character.toLowerCase();
      if (test.includes(searchTerm)) {
        searchResults.push(quotes[i]);
      }
    }
    this.setState({ simpsons: searchResults });
  };

  onLikeClick = (id) => {
    const quotes = [...this.state.simpsons];
    const likedQuotes = [];
    quotes[id].liked = !quotes[id].liked;
    quotes.forEach((item) => {
      if (item.liked) {
        likedQuotes.push(item);
      }
    });
    let numLiked = likedQuotes.length;
    this.setState({ numLiked });
  };

  componentDidMount() {
    this.getApiData();
  }

  render() {
    console.log(this.state.numLiked);
    if (!this.state.simpsons) {
      return <p>Loading...</p>;
    }
    return (
      <div className="container">
        <h1>Springfield Wisdom</h1>
        <div className="search">
          <input
            type="text"
            onInput={this.onSearchInput}
            placeholder="Enter a Springfield resident..."
            name="search"
            id="search"
          />

          <button onClick={this.onSearchClick}>Filter</button>
        </div>
        <div>
          <h2>You liked {this.state.numLiked} pearls of wisdom!</h2>
        </div>
        <Quotes
          quotes={this.state.simpsons}
          searchTerm={this.state.search}
          onDeleteItem={this.onDeleteItem}
          onSeachClick={this.onSearchClick}
          onLikeClick={this.onLikeClick}
        />
        ;
      </div>
    );
  }
}

export default App;
