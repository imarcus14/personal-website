import "./Header.scss"

import { Link } from "react-router-dom";

const Header = () => {
    return ( 
        <div className="header">
            <Link className="header__link" to={"/"}> 
                <h3>Profile</h3>
            </Link>
            <Link className="header__link" to={"/projects"}> 
                <h3>Projects</h3>
            </Link>
            
        </div>
     );
}
 
export default Header;