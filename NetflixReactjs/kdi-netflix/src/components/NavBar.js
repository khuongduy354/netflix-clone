import React, { useEffect, useState } from "react";
import "./NavBar.css";
const NavBar = () => {
  const [blackNav, setBlackNav] = useState(false);
  const handleScroll = () => {
    window.scrollY > 100 ? setBlackNav(true) : setBlackNav(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className={` navBar ${blackNav && "navBar--black"}`}>
      <div className="container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
          alt="Netflix logo"
          className="navBar__logo"
        />
      </div>
    </div>
  );
};

export default NavBar;
