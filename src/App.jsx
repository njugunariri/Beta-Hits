import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Layouts/NavBar/Navbar";
import Sidebar from "./components/Layouts/SideBar/Sidebar";
import Home from "./components/Sections/Home/Home";

function App() {
  // Initialize the state
  const [music, setMusic] = useState([]);
  const [savedSongs, setSavedSongs] = useState([]);
  const [filteredMusic, setFilteredMusic] = useState([])

  // Fetch the data and reset the state
  useEffect(() => {
    fetch("http://localhost:3000/musicDB")
      .then((res) => res.json())
      .then((data) => {
        setMusic(data);
        setFilteredMusic(data);
      })
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  // handling the save feature
  function handleSave(song) {
    fetch(`http://localhost:3000/musicDB/${song.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        isSaved: !song.isSaved,
      }),
    });
    fetch("http://localhost:3000/savedsongs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(song),
    })
      .then((res) => res.json())
      .then((song) => {
        const updatedSongs = [...savedSongs, song];
        setSavedSongs(updatedSongs);
        console.log(updatedSongs);
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className="App">
      <Navbar setFilteredMusic={setFilteredMusic} music={music} />
      <Sidebar />
      <Home music={filteredMusic} handleSave={handleSave} />
    </div>
  );
}

export default App;
