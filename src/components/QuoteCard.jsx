import React from "react";

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
        <div className="character-img">
          <img src={image} alt={character} />
        </div>
      </div>
    );
  }
  return (
    <div
      className={`card left ${display ? "display" : "hide"}`}
      key={id}
      style={{ backgroundColor: liked ? "palevioletred" : "steelblue" }}
    >
      <div>
        <img src={image} alt={character} />
      </div>
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
    </div>
  );
};

export default QuoteCard;
