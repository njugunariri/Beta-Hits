import  { useState } from 'react';
import { FaSearch } from 'react-icons/fa'


function Search({ music, setFilteredMusic }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    const filteredMusic = music.filter((song) => {
      return (
        song.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
        song.author_name.toLowerCase().includes(e.target.value.toLowerCase())
      );
    });
    setFilteredMusic(filteredMusic);
  };

  return (
    <div className="">
      <input className="search-input"
      type="text" 
       placeholder="Search for music,Artist..."
       value={searchTerm}
        onChange={handleSearch} />
      <button className="search-btn" type="submit">
          <FaSearch/>
        </button>
    </div>
  );
}

export default Search;
