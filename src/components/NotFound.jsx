import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container">
      <h1>Can't find any quotes!</h1>
      <Link to={"/"}>
        <button>Home</button>
      </Link>
    </div>
  );
};

export default NotFound;
