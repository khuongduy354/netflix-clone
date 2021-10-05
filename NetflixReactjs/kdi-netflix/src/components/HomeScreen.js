import React from "react";
import NavBar from "./NavBar";
import Row from "./Row";
import Banner from "./Banner";
import "./HomeScreen.css";
import tmdbEnpoints from "./Request";
const HomeScreen = () => {
  return (
    <div className="homeScreen">
      <NavBar />
      <Banner />
      <div className="rows">
        <Row
          title="Top Rated"
          moviesUrls={tmdbEnpoints.top_rated}
          isLarge={false}
        />
        <Row
          title="Popular"
          moviesUrls={tmdbEnpoints.popular}
          isLarge={false}
        />
        <Row
          title="Upcoming"
          moviesUrls={tmdbEnpoints.upcoming}
          isLarge={false}
        />
      </div>
    </div>
  );
};

export default HomeScreen;
