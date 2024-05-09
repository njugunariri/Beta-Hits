import { useState } from 'react'
import './App.css'
import Navbar from './components/Layouts/Navbar'
import Sidebar from './components/Layouts/Sidebar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <Navbar />
    <Sidebar />
    </div>
  )
}

export default App
