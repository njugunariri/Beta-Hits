import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Layouts/NavBar/Navbar'
import Sidebar from './components/Layouts/SideBar/Sidebar'
import Home from './components/Sections/Home/Home'


function App() {
  // initialize the state
  const [music, setMusic] = useState([]);
 
  

  // fetch the data and reset the state
  useEffect(() => {
    fetch("http://localhost:3000/musicDB")
      .then((res) => res.json())
      .then((data) => setMusic(data));
  }, []);

  return (
    <div className='App'>
      <Home music={music}/>
      <Navbar />
      <Sidebar />
    </div>
  )
}

export default App
