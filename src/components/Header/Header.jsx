import "./Header.scss"

import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {

    const [activeLink, setActiveLink] = useState("/");

    const handleClick = (path) => {
        setActiveLink(path);
    };

    return ( 
        <div className="header">
            <Link className={`header__link ${
                    activeLink === "/" ? "header__link--active" : ""
                }`}
                to="/"
                onClick={() => handleClick("/")}> 
                <h3>Profile</h3>
            </Link>
            <Link className={`header__link ${
                    activeLink === "/projects" ? "header__link--active" : ""
                }`}
                to="/projects"
                onClick={() => handleClick("/projects")}> 
                <h3>Projects</h3>
            </Link>
            
        </div>
     );
}
 
export default Header;