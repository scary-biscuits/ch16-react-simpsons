import React from "react";
const Errors = (props) => {
  return (
    <div>
      <p>Error: {props.error.name}</p>
    </div>
  );
};

export default Errors;
