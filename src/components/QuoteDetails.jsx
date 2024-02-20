import React from "react";
const QuoteDetails = (props) => {
  const { quote, character, id, onDeleteItem, onLikeClick, liked } =
    props.simpsons;

  return (
    <div className="quote-details">
      <h2>"{quote}"</h2>
      <p>&mdash; {character}</p>
      <div className="buttons">
        <button
          style={{
            backgroundColor: liked ? "#1b1b1b" : "#ffd90f",
            color: liked ? "#ff6d90" : "initial",
          }}
          onClick={() => onLikeClick(id)}
        >
          {liked ? "Unlike" : "Like"}
        </button>
        <button onClick={() => onDeleteItem(id)}>Delete</button>
      </div>
    </div>
  );
};

export default QuoteDetails;
