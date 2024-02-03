import React, { Component } from "react";
class Spinner extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <h1>Loading quotes...</h1>

        <span className="loader"></span>
      </div>
    );
  }
}

export default Spinner;
