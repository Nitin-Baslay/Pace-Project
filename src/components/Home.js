import { FiTwitter } from "react-icons/fi";
import { BsInstagram } from "react-icons/bs";
import { ImDribbble } from "react-icons/im";
import { SiAudiomack } from "react-icons/si";
import "./Home.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Home = () => {
  const [newsData, setNewsData] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=in&apiKey=2822a3fe205d412b94c6061940272f2d`
      )
      .then((response) => {
        setNewsData(response.data.articles);
      })
      .catch(() => {
        alert("Invalid Request");
      });
  }, []);
  return (
    <div className="homediv">
      <nav className="navbar">
        <div className="homefirst">
          <Link to={"/"} style={{ textDecoration: "none" }}>
            {" "}
            <p className="d">D</p>
          </Link>

          <p>LEARN</p>
          <p>BLOG</p>
          <p>BOOKMARKS</p>
          <p>UI KIT</p>
          <p>LAIN NYA</p>
        </div>
        <div className="seconddiv">
          <FiTwitter className="iconone" />
          <BsInstagram className="iconone" />
          <ImDribbble className="iconone" />
          <SiAudiomack className="iconone one" />
        </div>
      </nav>
      <hr className="line" />
      <h1 className="article">Featured Article</h1>
      <div className="masternewsdiv">
        {newsData.map((ele) => {
          return (
            <div className="newsmain" >
              <h1 className="title">{ele.title}</h1>
              <img src={ele.urlToImage} className="newsimg" alt="image"></img>
              <h2>{ele.content}</h2>
              <h2>{ele.description}</h2>
              <h5>By: {ele.author}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Home;
