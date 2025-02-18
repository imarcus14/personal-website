import "./Header.scss";

import { Link } from "react-router-dom";
import github from "../../assets/icons/github.svg";
import gmail from "../../assets/icons/gmail.svg";
import linkedin from "../../assets/icons/linkedin.png";
import { useState } from "react";

const Header = () => {
  const [activeLink, setActiveLink] = useState("/");

  const handleClick = (path) => {
    setActiveLink(path);
  };

  return (
    <div className="header">
      <div className="header-links">
        <Link
          className={`header__link ${
            activeLink === "/" ? "header__link--active" : ""
          }`}
          to="/"
          onClick={() => handleClick("/")}
        >
          <h3>Profile</h3>
        </Link>
        <Link
          className={`header__link ${
            activeLink === "/projects" ? "header__link--active" : ""
          }`}
          to="/projects"
          onClick={() => handleClick("/projects")}
        >
          <h3>Projects</h3>
        </Link>
        <Link
          className={`header__link ${
            activeLink === "/projects" ? "header__link--active" : ""
          }`}
          to="/projects"
          onClick={() => handleClick("/projects")}
        >
          <h3>About</h3>
        </Link>
        <Link
          className={`header__link ${
            activeLink === "/projects" ? "header__link--active" : ""
          }`}
          to="/projects"
          onClick={() => handleClick("/projects")}
        >
          <h3>Contact</h3>
        </Link>
      </div>

      {/* <div className="contact-options">
        <div className="contact-icon">
          <Link to="https://www.linkedin.com/in/ivan-marcus/">
            <img className="contact-img" src={linkedin} alt="linkedin icon" />
          </Link>
        </div>
        <div className="contact-icon">
          <Link to="mailto:ivanmarcus1@gmail.com">
            <img className="contact-img" src={gmail} alt="Gmail icon" />
          </Link>
        </div>
        <div className="contact-icon">
          <Link to="https://github.com/imarcus14">
            <img className="contact-img" src={github} alt="Gmail icon" />
          </Link>
        </div>
      </div> */}
    </div>
  );
};

export default Header;
