import "./Signup.css";
import LoginImage from "../assets/Login.png";
const Signup = () => {
  return (
    <div className="master one">
      <img src={LoginImage} className="loginImage" />
      <h1>Welcome to Bardeen</h1>
      <p>Let's log in to launch your automations.</p>
      <div className="loginInput">
        <input type={"email"} className="email" placeholder="Email Address" />
        <input type={"password"} className="password" placeholder="Password" />
      </div>
      <button className="bttn1 one">Sign Up</button>
    </div>
  );
};
export default Signup;
