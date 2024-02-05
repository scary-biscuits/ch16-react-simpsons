import React, { Component } from "react";
import axios from "axios";
import Spinner from "./components/Spinner";
import Search from "./components/Search";
import Quotes from "./components/Quotes";
import "./App.css";
import Liked from "./components/Liked";

class App extends Component {
  state = { search: "", numLiked: 0 };

  getApiData = async () => {
    const { data } = await axios.get(
      `https://thesimpsonsquoteapi.glitch.me/quotes?count=50`
    );
    for (let i = 0; i < data.length; i++) {
      data[i].id = i;
      data[i].liked = false;
      data[i].display = true;
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

    for (let i = 0; i < quotes.length; i++) {
      let test = quotes[i].character.toLowerCase();
      quotes[i].display = true;
      if (!test.includes(searchTerm)) {
        quotes[i].display = false;
      }
    }
    this.setState({ simpsons: quotes });
  };

  onLikeClick = (id) => {
    const quotes = [...this.state.simpsons];
    const likedQuotes = [];
    const index = quotes.findIndex((item) => item.id === id);

    quotes[index].liked = !quotes[index].liked;
    quotes.forEach((item) => {
      if (item.liked) {
        likedQuotes.push(item);
      }
    });
    let numLiked = likedQuotes.length;
    this.setState({ numLiked, likedQuotes });
  };

  onSortClick = () => {
    const quotes = [...this.state.simpsons];
    quotes.reverse();
    this.setState({ simpsons: quotes });
  };

  onToggleLikedClick = () => {
    const quotes = [...this.state.simpsons];
    const likedQuotes = [...this.state.likedQuotes];

    //count number of cards displayed
    let counter = 0;
    for (let i = 0; i < quotes.length; i++) {
      if (quotes[i].display) counter++;
    }
    if (!likedQuotes) {
    } else {
      //if there are more displayed than liked, only display the liked ones. otherwise show everything
      if (counter > likedQuotes.length) {
        quotes.forEach((item) => {
          if (item.liked) {
            item.display = true;
          } else {
            item.display = false;
          }
        });
      } else {
        quotes.forEach((item) => {
          item.display = true;
        });
      }
    }

    this.setState({ simpsons: quotes });
  };

  componentDidMount() {
    this.getApiData();
  }

  render() {
    if (!this.state.simpsons) {
      return <Spinner />;
    }
    return (
      <div className="container">
        <h1>Everything's coming up Milhouse!</h1>
        <Search
          onSearchInput={this.onSearchInput}
          onSearchClick={this.onSearchClick}
          getApiData={this.getApiData}
          onSortClick={this.onSortClick}
          onToggleLikedClick={this.onToggleLikedClick}
        />
        <Liked numLiked={this.state.numLiked} />
        <Quotes
          quotes={this.state.simpsons}
          onDeleteItem={this.onDeleteItem}
          onLikeClick={this.onLikeClick}
        />
      </div>
    );
  }
}

export default App;
