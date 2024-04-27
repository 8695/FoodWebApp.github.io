import React from "react";
import style from "../../css/signUp.module.css";
import { useState } from "react";
import SignupImage from "../../img/Happy-Person-Transparent.png"

export const Signup=()=> {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsername("");
    setPassword("");
    setEmail("");
  };
  return (
    <div className={style.SignContainer}>
      <div className={style.SideImg}>
    <h1 style={{ textAlign:"center", color:"white",marginTop:"40px"}}>Create a Account</h1>
        <img src={SignupImage} alt="image" className={style.img} />
      </div>
      <div className={style.loginContainer}>
        <form onSubmit={handleSubmit} className={style.loginForm}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label htmlFor="Phone">Phone:</label>
          <input
            type="Phone"
            id="phone"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label htmlFor="password"> Confirm Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Create Account</button>
        </form>
      </div>
    </div>
  );
}
