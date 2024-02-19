import React from "react";
import QuoteCard from "./QuoteCard";

const Quotes = (props) => {
  return props.quotes.map((item) => {
    return (
      <QuoteCard
        {...item}
        onDeleteItem={props.onDeleteItem}
        onLikeClick={props.onLikeClick}
      />
    );
  });
};

export default Quotes;
