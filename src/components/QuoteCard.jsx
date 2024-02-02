import React, { Component } from "react";
class QuoteCard extends Component {
  state = {};

  render() {
    const { quote, character, image, id, onDeleteItem, characterDirection } =
      this.props;
    console.log(this.props);

    if (characterDirection === "Right") {
      return (
        <div className="card right" key={id}>
          <div>
            <h1>{character}</h1>
            <p>{quote}</p>
            <button onClick={() => onDeleteItem(id)}>Delete</button>
          </div>
          <div>
            <img src={image} alt={character} />
          </div>
        </div>
      );
    }
    return (
      <div className="card left" key={id}>
        <div>
          <img src={image} alt={character} />
        </div>
        <div>
          <h1>{character}</h1>
          <p>{quote}</p>
          <button onClick={() => onDeleteItem(id)}>Delete</button>
        </div>
      </div>
    );
  }
}

export default QuoteCard;
