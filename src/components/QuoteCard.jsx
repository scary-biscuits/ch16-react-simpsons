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

  return (
    <div
      className={`card ${characterDirection} ${display ? "display" : "hide"}`}
      key={id}
      style={{ backgroundColor: liked ? "palevioletred" : "steelblue" }}
    >
      {characterDirection === "Right" ? (
        <>
          <QuoteDetails
            simpsons={props}
            liked={liked}
            onDeleteItem={onDeleteItem}
            onLikeClick={onLikeClick}
          />
          <QuoteImage image={image} character={character} />
        </>
      ) : (
        <>
          <QuoteImage image={image} character={character} />
          <QuoteDetails
            simpsons={props}
            liked={liked}
            onDeleteItem={onDeleteItem}
            onLikeClick={onLikeClick}
          />
        </>
      )}
    </div>
  );
};

export default QuoteCard;
