import React from "react";
import { useParams } from "react-router-dom";
import simpsons from "../simpsons.json";

const Character = () => {
  const { name } = useParams();
  const character = simpsons.find((character) => {
    return character.character === name;
  });
  console.log(character);
  return (
    <>
      <p>{character.character}</p>
      <p>{character.quote}</p>
    </>
  );
};

export default Character;
