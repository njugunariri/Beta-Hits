import './navbar.css';

function Navbar() {
  return (
    <div className="navbar">
    <div className="navbar-container">
      <a href="https://i.pinimg.com/564x/8c/3e/d8/8c3ed84b8ddeb00eef516a6d0e7cebf7.jpg" className="logo">Your Logo Here</a> 
      <input type="text" className="search-input" placeholder="Search for tracks, artist..." />
      <button className="profile-button">
        <svg className="profile-icon" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM16 7a6 6 0 1 1-12 0 6 6 0 0 1 12 0zm-4 1c1.112 0 2 .888 2 2 0 1.112-.888 2-2 2s-2-.888-2-2zM11 3a1 1 0 1 1 2 0 1 1 0 0 1-2 0z" clipRule="evenodd" />
        </svg>
      </button>
    </div>
  </div>
  )
}

export default Navbar