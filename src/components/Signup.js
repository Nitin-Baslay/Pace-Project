import "./Signup.css";
import LoginImage from "../assets/Login.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
const Signup = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const signupHandler = (event) => {
    setEmail(event.target.value);
  };
  const passwordHandler1 = (event) => {
    setPassword(event.target.value);
  };
  const submitHandler = () => {
    let obj = {
      email: email,
      password: password,
      returnSecureToken: true,
    };
    axios
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDdhImpmo5aNCcGZmwXFgJQrWEZ1kQbZWs",
        obj
      )
      .then((response) => {
        alert(`${response.data.email} registered successfully`);
      })
      .catch((error) => {
        alert(error.response.data.error.message);
      });
    setEmail("");
    setPassword("");
    navigate("/");
  };
  return (
    <div className="master one">
      <img src={LoginImage} className="loginImage" />
      <h1>Welcome to Bardeen</h1>
      <p>Let's log in to launch your automations.</p>
      <div className="loginInput">
        <input
          type={"email"}
          className="email"
          placeholder="Email Address"
          onChange={signupHandler}
          value={email}
        />
        <input
          type={"password"}
          className="password"
          placeholder="Password"
          onChange={passwordHandler1}
          value={password}
        />
      </div>
      <Link to="/" style={{ textDecoration: "none" }}>
        <p>Already Registered? Sign In</p>
      </Link>
      <button className="bttn1 one" onClick={submitHandler}>
        Sign Up
      </button>
    </div>
  );
};
export default Signup;
