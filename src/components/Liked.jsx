import React, { Component } from "react";
class Liked extends Component {
  state = {};
  render() {
    return (
      <div>
        <h2
          className="like-count"
          style={{ display: this.props.numLiked ? "initial" : "none" }}
        >
          You liked {this.props.numLiked} pearl
          <span
            style={{ display: this.props.numLiked > 1 ? "initial" : "none" }}
          >
            s
          </span>{" "}
          of Springfield wisdom!
        </h2>
      </div>
    );
  }
}

export default Liked;
