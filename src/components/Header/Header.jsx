import "./Header.scss";

import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
            activeLink === "/about" ? "header__link--active" : ""
          }`}
          to="/about"
          onClick={() => handleClick("/about")}
        >
          <h3>About</h3>
        </Link>
        <Link
          className={`header__link ${
            activeLink === "/contact" ? "header__link--active" : ""
          }`}
          to="/contact"
          onClick={() => handleClick("/contact")}
        >
          <h3>Contact</h3>
        </Link>
      </div>

      <div className="contact-options">
        <div className="contact-icon">
          <Link
            to="#"
            onClick={(e) => {
              e.preventDefault();
              window.open(
                "https://www.linkedin.com/in/ivan-marcus/",
                "_blank",
                "noopener,noreferrer"
              );
            }}
          >
            <FontAwesomeIcon
              className="contact-img"
              icon={faLinkedin}
              color="#121420"
            />
          </Link>
        </div>
        <div className="contact-icon">
          <Link
            to="#"
            onClick={(e) => {
              e.preventDefault();
              window.open(
                "https://github.com/imarcus14",
                "_blank",
                "noopener,noreferrer"
              );
            }}
          >
            <FontAwesomeIcon
              className="contact-img"
              icon={faGithub}
              color="#121420"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
