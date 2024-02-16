import React from "react";

const Liked = (props) => {
  return (
    <div>
      <h2
        className="like-count"
        style={{ display: props.numLiked ? "initial" : "none" }}
      >
        You liked {props.numLiked} pearl
        <span style={{ display: props.numLiked > 1 ? "initial" : "none" }}>
          s
        </span>{" "}
        of Springfield wisdom!
      </h2>
    </div>
  );
};

export default Liked;
