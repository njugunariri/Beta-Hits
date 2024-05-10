import React, { useEffect, useState } from "react";
import MusicCard from "../MusicCard/MusicCard";

export default function SavedSongs() {
  const [savedSongs, setSavedSongs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/savedsongs")
    .then((res) => res.json())
    .then((data) => setSavedSongs(data))
  }, [])

  return savedSongs.map((song) => <MusicCard key={song.id} song={song} />);
}
