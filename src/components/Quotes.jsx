import React, { Component } from "react";
import QuoteCard from "./QuoteCard";

class Quotes extends Component {
  state = {};

  render() {
    return this.props.quotes.map((item) => {
      return (
        <QuoteCard
          {...item}
          onDeleteItem={this.props.onDeleteItem}
          onLikeClick={this.props.onLikeClick}
          id={item.id}
        />
      );
    });
  }
}

export default Quotes;
