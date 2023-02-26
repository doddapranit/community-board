import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss'
import AlbumCard from './components/AlbumCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className = "Title"> Top 10 Albums of 2022</div>
      <AlbumCard title = "Mr. Morale and The Big Steppers" artist = "Kendrick Lamar" cover = {reactLogo} />
    </div>
  )
}

export default App
