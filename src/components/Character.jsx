import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "../App.css";
import QuoteCard from "./QuoteCard";
import NotFound from "./NotFound";

const Character = (props) => {
  const [character, setCharacter] = useState([]);
  const { name } = useParams();

  // console.log(props);

  const characterQuotes = (char) => {
    const quotes = [...props.simpsons];
    console.log(quotes);
    const characterQuotes = [];

    quotes.forEach((item) => {
      const searchTerm = name.toLowerCase();
      if (item.character.toLowerCase().includes(searchTerm)) {
        characterQuotes.push(item);
      }
    });

    console.log(characterQuotes);
    return characterQuotes;
  };

  if (characterQuotes(name).length < 1) {
    return <NotFound />;
  }

  return characterQuotes(name).map((item) => {
    return (
      <div className="container character">
        <QuoteCard
          {...item}
          onDeleteItem={props.onDeleteItem}
          onLikeClick={props.onLikeClick}
        />
      </div>
    );
  });
};

export default Character;
