import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Login />} path=""></Route>
        <Route element={<Signup />} path="signup"></Route>
        <Route element={<Home />} path="home"></Route>
      </Routes>
    </div>
  );
}

export default App;
