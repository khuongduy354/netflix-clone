import React, { useEffect, useState } from "react";
import "./Banner.css";
const Banner = () => {
  const api_key = "0651ff87460fdbcce05343c37dfa6ef3";
  const img_path = "https://image.tmdb.org/t/p/original";
  const [movie, setMovie] = useState({});
  const truncate = (str, n) => {
    return str.length > n ? str.substr(0, n - 1) : +str;
  };
  useEffect(() => {
    async function getBanner() {
      const response = await fetch(
        `https://api.themoviedb.org/3/trending/all/day?api_key=${api_key}`
      );
      const jsonedResponse = await response.json();
      setMovie(
        jsonedResponse.results[
          Math.floor(Math.random() * (jsonedResponse.results.length - 1))
        ]
      );
    }
    setInterval(getBanner, 10000);
    return clearInterval(getBanner, 10000);
  }, []);

  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(${img_path}${movie.backdrop_path})`,
      }}
    >
      <div className="container">
        <h1 className="banner__header">{movie.title || movie.name}</h1>
        <button className="banner__play">Play</button>
        <button className="banner__mylist">My list</button>

        <p className="banner__description">
          {truncate(
            `        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nam
        error labore debitis! Autem, quo odio dolore minus itaque facilis quas
        esse vel nobis dicta reprehenderit placeat tempora natus blanditiis.`,
            150
          )}
        </p>
      </div>
    </div>
  );
};

export default Banner;
