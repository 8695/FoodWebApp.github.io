import React, { useState } from "react";
import style from "../../css/login.module.css";

import { NavLink, Outlet } from "react-router-dom";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false); // State to track login status

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsername("");
    setPassword("");
    // Here you might implement login logic, for demonstration purposes just setting loggedIn to true
    setLoggedIn(true);
  };

  // Render SignUp component if user is not logged in
  if (!loggedIn) {
    return (
      <>
        <div className={style.Login}>
          <h1 className={style.titleLogin}>
            Login 
            <span className={style.para}>To get the Order</span>
          </h1>
          <div className={style.loginContainer}>
            <form onSubmit={handleSubmit} className={style.loginForm}>
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit">Login</button>
            </form>
          </div>
          <div className={style.Signup}>
            <p className={style.SignHeading}>Dont have an Account </p>
            <NavLink to="/signup"><p className={style.btn}>SignUp</p></NavLink>
          </div>
        </div>
        <Outlet />
      </>
    );
  }

  // If user is logged in, render null or any other component you want
  return null;
};

export default LoginForm;
