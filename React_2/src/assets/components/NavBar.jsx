import "../css/Navbar.css"

import { Link } from "react-router-dom";
function Navbar() {
    return(
        <nav className="navbar">
              <div className="navbar-brand">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/favorites" className="nav-link">Favorites</Link>
              </div>
        </nav>
    )
}
export default Navbar