import React, { useEffect, useState } from "react";
import MusicCard from "../MusicCard/MusicCard";
import Sidebar from "../../Layouts/SideBar/Sidebar";

export default function SavedSongs() {
  const [savedSongs, setSavedSongs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/savedsongs")
    .then((res) => res.json())
    .then((data) => setSavedSongs(data))
  }, [])

  function handleDelete(song) {
    fetch(`http://localhost:3000/savedsongs/${song.id}`, {
      method: 'DELETE',
    })
    fetch(`http://localhost:3000/musicDB/${song.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        isSaved: !song.isSaved,
      }),
    });
  }

  return (
    <div>
      {savedSongs.map((song) => <MusicCard key={song.id} song={song} onHandleDelete={handleDelete}/>)}
      <Sidebar />
    </div>
  );
}
