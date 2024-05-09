import "./sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      {/* Your sidebar content here */}
      <div className="sidebar-header">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLJcn86zqfPBm-Sy2wsDy48VEiRzmQb56VHhVpa33GawwfJh0vpxI_rfsH3v4SfDYF0B8&usqp=CAU" alt="Sidebar Logo" className="sidebar-logo" />
        <div className="sidebar-title-container">
          <h3>Library</h3>
          <hr /> {/* Added a horizontal rule for separation */}
        </div>
      </div>
      <div className="sidebar-nav">
        {/* Navigation links for your sidebar */}
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Search</a>
          </li>
          <div className="sidebar-title-container">
            {" "}
            <h3>PLAYLIST</h3>
            <hr />
          </div>
          <li>
            <a href="#">Saved Songs</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar