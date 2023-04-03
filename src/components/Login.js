import "./Login.css";
import LoginImage from "../assets/Login.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { auth, provider, providerone } from "./config";
import { signInWithPopup } from "firebase/auth";
const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const loginHandler = (event) => {
    setEmail(event.target.value);
  };
  const passwordHandler2 = (event) => {
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
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDdhImpmo5aNCcGZmwXFgJQrWEZ1kQbZWs",
        obj
      )
      .then((response) => {
        navigate("/home", { replace: true });
      })
      .catch((error) => {
        alert(error.response.data.error.message);
      });
    setEmail("");
    setPassword("");
  };
  const googleHandler = () => {
    signInWithPopup(auth, provider)
      .then((success) => {
        navigate("/home", { replace: true });
      })
      .catch((failure) => {
        console.log(failure);
      });
  };
  const githubhandler = () => {
    signInWithPopup(auth, providerone)
      .then((success) => {
        navigate("/home", { replace: true });
        console.log(success);
      })
      .catch((failure) => {
        console.log(failure);
      });
  };
  return (
    <div className="master">
      <img src={LoginImage} className="loginImage" />
      <h1>Welcome to Bardeen</h1>
      <p>Let's log in to launch your automations.</p>
      <div className="loginInput">
        <input
          type={"email"}
          className="email"
          placeholder="Email Address"
          onChange={loginHandler}
          value={email}
        />
        <input
          type={"password"}
          className="password"
          placeholder="Password"
          onChange={passwordHandler2}
          value={password}
        />
      </div>
      <div className="lower">
        <Link to={"signup"} style={{ textDecoration: "none" }}>
          {" "}
          <p>Create Account</p>
        </Link>

        <p>Forgot Password?</p>
      </div>
      <button className="bttn1" onClick={submitHandler}>
        Sign In
      </button>
      <div className="loginfooter">
        <p onClick={googleHandler} className="btnl">
          Sign in with Google
        </p>
        <p onClick={githubhandler} className="btnl">
          Sign in with Github
        </p>
      </div>
    </div>
  );
};
export default Login;
