import React, { useEffect, useState } from "react";
import "./NavBar.css";
import { auth } from "../firebase";
import { selectUser, logout } from "../features/counter/userSlice";
import { useSelector, useDispatch } from "react-redux";

const NavBar = ({ showSignIn, setShowSignIn }) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
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
        {user && (
          <div className="navBar__user-container">
            <h1 className="navBar__user">{user.email}</h1>
            <button
              className="navBar__logout"
              onClick={() => {
                dispatch(logout());
                auth.signOut();
              }}
            >
              Log out
            </button>
          </div>
        )}
        {showSignIn && (
          <button
            onClick={() => {
              setShowSignIn(true);
            }}
            className="navBar__btn"
          >
            Sign In
          </button>
        )}
      </div>
    </div>
  );
};

export default NavBar;
