import React, { useEffect, useState } from "react";
import "./Row.css";
const api_key = "0651ff87460fdbcce05343c37dfa6ef3";
const img_path = "https://image.tmdb.org/t/p/original";

const Row = ({ title, moviesUrls, isLarge }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    (async function () {
      const fetchUrl = `${moviesUrls}?api_key=${api_key}`;
      let response = await fetch(fetchUrl);
      response = await response.json();
      if (response.results.length > 9) {
        setMovies(response.results.slice(0, 10));
      } else {
        setMovies(response.results);
      }
    })();
  }, [moviesUrls]);
  return (
    <div className="row">
      <h1 className="row__header">{title}</h1>
      <div className="row__movies">
        {movies &&
          movies.map((movie) => {
            {
              if (isLarge) {
                return (
                  <img
                    class="row__img"
                    src={
                      movie.backdrop_path && `${img_path}${movie.backdrop_path}`
                    }
                    alt={`${movie.name}`}
                  />
                );
              } else {
                return (
                  <img
                    class="row__img"
                    src={
                      movie.backdrop_path && `${img_path}${movie.poster_path}`
                    }
                    alt={`${movie.name}`}
                  />
                );
              }
            }
          })}
      </div>
    </div>
  );
};
export default Row;
