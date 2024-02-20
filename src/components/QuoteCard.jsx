import React from "react";
import QuoteImage from "./QuoteImage";
import QuoteDetails from "./QuoteDetails";

const QuoteCard = (props) => {
  const {
    quote,
    character,
    image,
    id,
    onDeleteItem,
    characterDirection,
    onLikeClick,
    liked,
    display,
  } = props;

  if (characterDirection === "Right") {
    return (
      <div
        className={`card right ${display ? "display" : "hide"}`}
        key={id}
        style={{ backgroundColor: liked ? "palevioletred" : "steelblue" }}
      >
        <QuoteDetails
          simpsons={props}
          liked={liked}
          onDeleteItem={onDeleteItem}
          onLikeClick={onLikeClick}
        />
        <QuoteImage simpsons={props} />
      </div>
    );
  }
  return (
    <div
      className={`card left ${display ? "display" : "hide"}`}
      key={id}
      style={{ backgroundColor: liked ? "palevioletred" : "steelblue" }}
    >
      <QuoteImage simpsons={props} />
      <QuoteDetails
        simpsons={props}
        liked={liked}
        onDeleteItem={onDeleteItem}
        onLikeClick={onLikeClick}
      />
    </div>
  );
};

export default QuoteCard;
