import React, { useEffect, useRef, useState } from "react";
import NavBar from "./NavBar";
import "./Login.css";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const email = useRef(null);
  const password = useRef(null);
  const cfpassword = useRef(null);

  const handleSignIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(
      auth,
      email.current.value.trim(),
      password.current.value.trim()
    ).catch((e) => setErrorMsg(e.toString()));
  };
  const handleSignUp = (e) => {
    if (password === cfpassword) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      ).catch((e) => setErrorMsg(e.toString()));
    } else {
      setErrorMsg(`Password does not match`);
    }
    e.preventDefault();
  };

  const renderSignUp = () => {
    return (
      <form className="login__form">
        <input
          ref={email}
          placeholder="Email"
          type="text"
          className="form__email"
        />
        <input
          ref={password}
          placeholder="Password"
          type="password"
          className="form__password"
        />
        <input
          ref={cfpassword}
          placeholder="Confirm password"
          type="password"
          className="form__password"
        />
        <button className="form__submit-btn" onClick={handleSignUp}>
          Sign Up
        </button>
        <p>
          Have an account? Sign in
          <span
            className="form__signup-btn"
            onClick={() => {
              setShowSignUp(false);
              setShowSignIn(true);
            }}
          >
            {" "}
            here
          </span>
        </p>

        <button
          onClick={() => {
            setShowSignUp(false);
            setShowSignIn(false);
          }}
        >
          Back
        </button>
      </form>
    );
  };

  const renderSignIn = () => {
    return (
      <form className="login__form">
        <input
          ref={email}
          placeholder="Email"
          type="text"
          className="form__email"
        />
        <input
          ref={password}
          placeholder="Password"
          type="password  "
          className="form__password"
        />
        <button className="form__submit-btn" onClick={handleSignIn}>
          Sign In
        </button>
        <p>
          New to Netflix? Signup
          <span
            className="form__signup-btn"
            onClick={() => {
              setShowSignUp(true);
              setShowSignIn(false);
            }}
          >
            {" "}
            here
          </span>
        </p>

        <button
          onClick={() => {
            setShowSignIn(false);
          }}
        >
          Back
        </button>
      </form>
    );
  };
  const renderDefault = () => {
    return (
      <div className="login__email-container">
        <h1 className="login__title">Unlimited Film, TV and Programmes</h1>
        <h2 className="login__sub-title">Watch anywhere. Cancel anytime</h2>
        <p className="login__descriptions">
          Ready to watch? Enter your email to create membership
        </p>
        <div className="login__input-container">
          <input type="text" className="login__input" />
          <button className="login__email-btn">Get Started</button>
        </div>
      </div>
    );
  };
  return (
    <div className="login">
      <NavBar showSignIn={true} setShowSignIn={setShowSignIn} />
      <h1 className="login__erro">{errorMsg}</h1>
      {showSignIn
        ? renderSignIn()
        : showSignUp
        ? renderSignUp()
        : renderDefault()}
    </div>
  );
};

export default Login;
