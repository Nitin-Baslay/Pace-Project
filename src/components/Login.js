import "./Login.css";
import LoginImage from "../assets/Login.png";
const Login = () => {
  return (
    <div className="master">
      <img src={LoginImage} className="loginImage" />
      <h1 >Welcome to Bardeen</h1>
      <p>Let's log in to launch your automations.</p>
      <div className="loginInput">
        <input type={"email"} className="email" placeholder="Email Address" />
        <input type={"password"} className="password" placeholder="Password" />
      </div>
      <div className="lower">
        <p>Create Account</p>
        <p>Forgot Password?</p>
      </div>
      <button className="bttn1">Sign In</button>
      <div className="loginfooter">
        <p>Sign in with Google</p>
        <p>Sign in with Github</p>
      </div>
    </div>
  );
};
export default Login;
