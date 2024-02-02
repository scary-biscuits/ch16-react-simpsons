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
          onBtnClick={this.props.onBtnClick}
          id={item.id}
        />
      );
    });
  }
}

export default Quotes;
