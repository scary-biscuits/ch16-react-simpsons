import React, { Component } from "react";
class QuoteCard extends Component {
  state = {};

  render() {
    const {
      quote,
      character,
      image,
      id,
      onDeleteItem,
      characterDirection,
      onLikeClick,
      liked,
    } = this.props;
    console.log(this.props);

    if (characterDirection === "Right") {
      return (
        <div
          className="card right"
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
        className="card left"
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
  }
}

export default QuoteCard;
