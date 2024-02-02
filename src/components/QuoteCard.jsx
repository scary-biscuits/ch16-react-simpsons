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
            <h1>{character}</h1>
            <p>"{quote}"</p>
            <div className="buttons">
              <button onClick={() => onLikeClick(id)}>
                {liked ? "Unlike" : "Like"}
              </button>
              <button onClick={() => onDeleteItem(id)}>Delete</button>
            </div>
          </div>
          <div>
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
          <h1>{character}</h1>
          <p>"{quote}"</p>
          <div className="buttons">
            <button onClick={() => onLikeClick(id)}>
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
