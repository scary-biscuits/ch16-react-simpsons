import React, { Component } from "react";
import axios from "axios";
import Quotes from "./components/Quotes";
import "./App.css";

class App extends Component {
  state = { search: "" };

  getApiData = async () => {
    const { data } = await axios.get(
      `https://thesimpsonsquoteapi.glitch.me/quotes?count=50`
    );
    for (let i = 0; i < data.length; i++) {
      data[i].id = i;
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

  onBtnClick = () => {
    console.log(this.state.search);
  };

  componentDidMount() {
    this.getApiData();
  }
  render() {
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

          <button onClick={this.onBtnClick}>Search</button>
        </div>
        <Quotes
          quotes={this.state.simpsons}
          searchTerm={this.state.search}
          onDeleteItem={this.onDeleteItem}
          onBtnClick={this.onBtnClick}
        />
        ;
      </div>
    );
  }
}

export default App;
