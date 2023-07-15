import React from "react";
import "./WelcomePage.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import {Link} from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const exploreBtn = () => {
    navigate("/login");

  };

  useEffect(() => {
    let introtext = document.getElementById("introtext");
    let explore = document.getElementById("explore_btn");
    setInterval(() => {
      introtext.style.opacity = "100%";
      setInterval(() => {
        introtext.innerText = "Welcome";
      }, 1000);
    }, 1000);

    setInterval(() => {
      explore.style.opacity = "100%";
    }, 2500);
  }, []);
  return (
    <>
      <div className="intro">
        <h1 id="introtext">DigiVerse</h1>
        <button id="explore_btn">
          <Link to="/home">Explore</Link>
        </button>
      </div>
    </>
  );
};

export default Home;
