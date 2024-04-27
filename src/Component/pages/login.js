// LoginForm.js
import React, { useState } from "react";
import style from "../../css/login.module.css";

//import { NavLink, Outlet } from "react-router-dom";


const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsername("");
    setPassword("");
  };

  return (
    <>
    <div className={style.Login}>
       
        <h1 className={style.titleLogin}>Login 
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
          <p className={style.btn}>SignUp</p>
        
      </div>
      </div>
    </>
  );
};

export default LoginForm;
