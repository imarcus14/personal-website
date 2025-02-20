import "./Header.scss";

import { Link, useLocation } from "react-router-dom";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Header = () => {
  const location = useLocation(); // Get the current URL

  return (
    <div className="header">
      <div className="header-links">
        <Link
          className={`header__link ${
            location.pathname === "/" ? "header__link--active" : ""
          }`}
          to="/"
        >
          <h3>Profile</h3>
        </Link>
        <Link
          className={`header__link ${
            location.pathname === "/projects" ? "header__link--active" : ""
          }`}
          to="/projects"
        >
          <h3>Projects</h3>
        </Link>
        <Link
          className={`header__link ${
            location.pathname === "/about" ? "header__link--active" : ""
          }`}
          to="/about"
        >
          <h3>About</h3>
        </Link>
        <Link
          className={`header__link ${
            location.pathname === "/contact" ? "header__link--active" : ""
          }`}
          to="/contact"
        >
          <h3>Contact</h3>
        </Link>
      </div>

      <div className="contact-options">
        <div className="contact-icon">
          <a
            href="https://www.linkedin.com/in/ivan-marcus/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              className="contact-img"
              icon={faLinkedin}
              color="#121420"
            />
          </a>
        </div>
        <div className="contact-icon">
          <a
            href="https://github.com/imarcus14"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              className="contact-img"
              icon={faGithub}
              color="#121420"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
