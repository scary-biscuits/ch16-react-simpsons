import React from "react";
const QuoteImage = (props) => {
  const { character, image } = props;
  return (
    <div>
      <img src={image} alt={character} />
    </div>
  );
};

export default QuoteImage;
