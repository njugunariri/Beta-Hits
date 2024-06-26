import  { useState } from "react";
import "./MusicCard.css";

export default function MusicCard({ song, onHandleSave, onHandleDelete }) {
  const [heart, setHeart] = useState("🤍");

  return (
    <div className="song-container">
      <div className="song-avatar" key={song.id}>
        <img
          src={song.img}
          alt={song.name}
          style={{ width: "200px", objectFit: "cover" }}
        ></img>
      </div>
      <div className="content">
        <div className="header">
          <strong>{song.name}</strong>
        </div>
        <div>
          <em>{song.author_name}</em>
        </div>
        <br />
        <div>{song.type}</div>

        <button
          onClick={() => {
            heart === "🤍" ? setHeart("❤️") : setHeart("🤍");
          }}
        >
          {heart}
        </button>
        <button onClick={() => onHandleSave(song)}>
          {song.isSaved ? "Saved" : "Save"}
        </button>
        <button onClick={() => onHandleDelete(song)}>
          Delete
        </button>
      </div>
    </div>
  );
}
