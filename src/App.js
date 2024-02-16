import React, { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "./components/Spinner";
import Search from "./components/Search";
import Quotes from "./components/Quotes";
import "./App.css";
import Liked from "./components/Liked";

const App = () => {
  const [search, setSearch] = useState("");
  const [numLiked, setNumLiked] = useState(0);
  const [liked, setLiked] = useState([]);
  const [simpsons, setSimpsons] = useState();

  const getApiData = async () => {
    const { data } = await axios.get(
      `https://thesimpsonsquoteapi.glitch.me/quotes?count=50`
    );
    for (let i = 0; i < data.length; i++) {
      data[i].id = i;
      data[i].liked = false;
      data[i].display = true;
    }
    setSimpsons(data);
  };

  useEffect(
    () => {
      getApiData();
    },
    [] // means run once
  );

  const onDeleteItem = (id) => {
    const quotes = [...simpsons];
    const index = quotes.findIndex((item) => item.id === id);
    quotes.splice(index, 1);
    setSimpsons(quotes);
  };

  const onSearchInput = (e) => {
    setSearch(e.target.value);
    // store ("search", e.target.value);
  };

  const onSearchClick = () => {
    const searchTerm = search.toLowerCase();
    const quotes = [...simpsons];

    for (let i = 0; i < quotes.length; i++) {
      let test = quotes[i].character.toLowerCase();
      quotes[i].display = true;
      if (!test.includes(searchTerm)) {
        quotes[i].display = false;
      }
    }
    setSimpsons(quotes);
  };

  const onLikeClick = (id) => {
    const quotes = [...simpsons];
    const likedQuotes = [];
    const index = quotes.findIndex((item) => item.id === id);

    quotes[index].liked = !quotes[index].liked;
    quotes.forEach((item) => {
      if (item.liked) {
        likedQuotes.push(item);
      }
    });
    let numLiked = likedQuotes.length;
    setNumLiked(numLiked);
    setLiked(likedQuotes);
  };

  const onSortClick = () => {
    const quotes = [...simpsons];
    quotes.reverse();
    setSimpsons(quotes);
  };

  const onToggleLikedClick = () => {
    const quotes = [...simpsons];
    const likedQuotes = [...liked];

    if (!likedQuotes) {
    } else {
      if (quotes.find((item) => item.display && !item.liked)) {
        quotes.forEach((item) => {
          if (!item.liked) {
            item.display = false;
          } else {
            item.display = true;
          }
        });
      } else {
        quotes.forEach((item) => {
          item.display = true;
        });
      }
    }

    setSimpsons(quotes);
  };

  if (!simpsons) {
    return <Spinner />;
  }
  return (
    <div className="container">
      <h1>Everything's coming up Milhouse!</h1>
      <Search
        onSearchInput={onSearchInput}
        onSearchClick={onSearchClick}
        getApiData={getApiData}
        onSortClick={onSortClick}
        onToggleLikedClick={onToggleLikedClick}
      />
      <Liked numLiked={numLiked} />
      <Quotes
        quotes={simpsons}
        onDeleteItem={onDeleteItem}
        onLikeClick={onLikeClick}
      />
    </div>
  );
};

export default App;
