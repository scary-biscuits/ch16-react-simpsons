import React, { useState, useEffect } from "react";
import Spinner from "./components/Spinner";
import Home from "./Home";
import Character from "./components/Character";

import "./App.css";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";

const App = () => {
  const [simpsons, setSimpsons] = useState([]);
  const [numLiked, setNumLiked] = useState(0);
  const [liked, setLiked] = useState([]);

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

  useEffect(() => {
    getApiData();
  }, []);

  const onDeleteItem = (id) => {
    const quotes = [...simpsons];
    const index = quotes.findIndex((item) => item.id === id);
    quotes.splice(index, 1);
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

  if (!simpsons) {
    return <Spinner />;
  }
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            simpsons={simpsons}
            liked={liked}
            numLiked={numLiked}
            setSimpsons={setSimpsons}
            getApiData={getApiData}
            onDeleteItem={onDeleteItem}
            onLikeClick={onLikeClick}
          />
        }
      />
      <Route
        path="/:name"
        element={
          <Character
            simpsons={simpsons}
            onDeleteItem={onDeleteItem}
            onLikeClick={onLikeClick}
          />
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
