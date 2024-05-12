import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search for music..."
        />
        <button className="search-btn" type="button">
          Search
        </button>
        <Link to="/profile">
          <button className="profile-button">
            <span className="bar bar1"></span>
            <span className="bar bar2"></span>
            <span className="bar bar1"></span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
