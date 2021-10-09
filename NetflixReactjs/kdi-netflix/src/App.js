import React, { useEffect } from "react";

import "./App.css";
import HomeScreen from "./components/HomeScreen";
import Login from "./components/Login";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/counter/userSlice";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = () => {
      auth.onAuthStateChanged((user) => {
        if (user) {
          //logged in
          dispatch(
            login({
              uid: user.uid,
              email: user.email,
            })
          );
        } else {
          //logged out
          dispatch(logout());
        }
      });
    };
    unsubscribe();
    return unsubscribe;
  }, []);
  const user = useSelector(selectUser);

  console.log("app ran");
  return <div className="app">{user ? <HomeScreen /> : <Login />}</div>;
}

export default App;
