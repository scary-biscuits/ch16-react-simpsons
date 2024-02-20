import React from "react";
const QuoteImage = (props) => {
  const { character, image } = props.simpsons;
  return (
    <div>
      <img src={image} alt={character} />
    </div>
  );
};

export default QuoteImage;
