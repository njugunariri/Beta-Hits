import "./login.css";
import { Link } from "react-router-dom";

function Loginpage() {
  return (
    <div className="hero">
      <div className=" content">
        <h1>Welcome to Beta Hits</h1>
        <p>Where words fail, music speaks.</p>
        <Link to="/app">Start Listening</Link>
      </div>
    </div>
  );
}

export default Loginpage;
