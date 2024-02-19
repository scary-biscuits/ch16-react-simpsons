import React, { useState, useEffect } from "react";
import Spinner from "./Spinner";
import Search from "./Search";
import Quotes from "./Quotes";
import "../App.css";
import Liked from "./Liked";
import Joi from "joi";
import Errors from "./Errors";

const Home = (props) => {
  const [search, setSearch] = useState("");
  const [errors, setErrors] = useState();
  const { simpsons, setSimpsons, getApiData, liked, numLiked } = props;

  const schema = {
    name: Joi.string().min(3).max(22).allow(""),
  };

  const onSearchInput = async (e) => {
    const searchTerm = { name: e.target.value };
    setSearch(searchTerm);
    const _joiInstance = Joi.object(schema);
    // store ("search", e.target.value);

    try {
      await _joiInstance.validateAsync(searchTerm);
      setErrors(undefined);
    } catch (e) {
      const errorsMod = {};
      setTimeout(() => {
        e.details.forEach((error) => {
          errorsMod[error.context.key] = error.message;
        });
        setErrors(errorsMod);
      }, 3000);
    }
  };

  const onSearchClick = () => {
    const searchTerm = search.name.toLowerCase();
    const quotes = [...simpsons];

    for (let i = 0; i < quotes.length; i++) {
      let test = quotes[i].character.toLowerCase();
      quotes[i].display = true;
      if (!test.includes(searchTerm)) {
        quotes[i].display = false;
      }
    }
    setSimpsons(quotes);
  };

  const onSortClick = () => {
    const quotes = [...simpsons];
    quotes.reverse();
    setSimpsons(quotes);
  };

  const onToggleLikedClick = () => {
    const quotes = [...simpsons];
    const likedQuotes = [...liked];

    if (!likedQuotes) {
    } else {
      if (quotes.find((item) => item.display && !item.liked)) {
        quotes.forEach((item) => {
          if (!item.liked) {
            item.display = false;
          } else {
            item.display = true;
          }
        });
      } else {
        quotes.forEach((item) => {
          item.display = true;
        });
      }
    }

    setSimpsons(quotes);
  };

  return (
    <>
      <div className="container">
        <h1>Everything's coming up Milhouse!</h1>

        <Search
          onSearchInput={onSearchInput}
          onSearchClick={onSearchClick}
          getApiData={getApiData}
          onSortClick={onSortClick}
          onToggleLikedClick={onToggleLikedClick}
        />

        {errors ? <Errors error={errors} /> : ""}
        <Liked numLiked={numLiked} />

        <Quotes
          quotes={simpsons}
          onDeleteItem={props.onDeleteItem}
          onLikeClick={props.onLikeClick}
        />
      </div>
    </>
  );
};

export default Home;
