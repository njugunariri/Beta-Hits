import React from "react";
import MusicCollection from "../MusicCollection/MusicCollection";
import './Home.css'

export default function Home({ music, handleSave }) {
  return (
    <div className="home">
      <MusicCollection music={music} handleSave={handleSave} />
    </div>
  );
}
