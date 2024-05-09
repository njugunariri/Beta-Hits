
import MusicCard from "../MusicCard/MusicCard";

export default function MusicCollection({ music, handleSave }) {
  return (
    <div>
      {music.map((song) => (
        <MusicCard key={song.id} song={song} onHandleSave={handleSave} />
      ))}
    </div>
  );
}