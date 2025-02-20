import "./ProfileInfo.scss";

import { useEffect, useState } from "react";

import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import css from "../../assets/icons/css.svg";
import git from "../../assets/icons/git.svg";
import html from "../../assets/icons/html.svg";
import js from "../../assets/icons/javascript.svg";
import logo from "../../assets/icons/new-i.svg";
import mysql from "../../assets/icons/mysql.svg";
import react from "../../assets/icons/react.svg";

const ProfileInfo = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const nameArray = ["v", "a", "n"];
  const jobArray = [
    "s",
    "o",
    "f",
    "t",
    "w",
    "a",
    "r",
    "e",
    " ",
    "e",
    "n",
    "g",
    "i",
    "n",
    "e",
    "e",
    "r",
  ];

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);

    return () => clearTimeout(timeout); // Cleanup function
  }, []);

  return (
    <div>
      <div className="container profile">
        <div className="profile-text">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img src={logo} alt="Letter I" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              index={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              index={18}
            />
          </h1>
          <h2>Full-Stack Developer / Coding Enthusiast / Fashion Lover</h2>
          <Link to="/contact" className="profile-button">
            CONTACT ME
          </Link>
        </div>
      </div>
      <div className="skills-cube">
        <div className="skills-cube__spinning">
          <div className="face1">
            <img className="cube-icon" src={js} alt="javascript logo" />
          </div>
          <div className="face2">
            <img className="cube-icon" src={css} alt="css logo" />
          </div>
          <div className="face3">
            <img className="cube-icon" src={git} alt="git logo" />
          </div>
          <div className="face4">
            <img className="cube-icon" src={html} alt="html logo" />
          </div>
          <div className="face5">
            <img className="cube-icon" src={react} alt="react logo" />
          </div>
          <div className="face6">
            <img className="cube-icon" src={mysql} alt="mysql logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
