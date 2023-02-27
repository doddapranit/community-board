import { useState } from 'react'
import reactLogo from './assets/react.svg'
import hhtheader from './assets/hhtheader.jpeg'
import mmbs from './assets/mmbs.webp'
import ramona from './assets/ramona.webp'
import tango from './assets/tango.jpg'
import dry from './assets/dry.jpeg'
import roses from './assets/roses.jpeg'
import tfs from './assets/tfs.jpeg'
import mmesyf from './assets/mmesyf.jpeg'
import nothankyou from './assets/nothankyou.jpeg'
import _2000 from './assets/_2000.jpeg'
import $$$ from './assets/$$$.jpeg'
import './App.scss'
import AlbumCard from './components/AlbumCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <img className = "header" src={hhtheader} alt="header" />
      <div className = "Title"> Best Hip Hop Albums of 2022</div>
      <div className="wrapper">
          <AlbumCard title = "Mr. Morale and The Big Steppers" artist = "Kendrick Lamar" cover = {mmbs} />
          <AlbumCard title = "Ramona Park Broke My Heart" artist = "Vince Staples" cover = {ramona} />
          <AlbumCard title = "Tango" artist = "G Perico" cover = {tango} />
          <AlbumCard title = "It's Almost Dry" artist = "Pusha T" cover = {dry} />
          <AlbumCard title = "Digital Roses Don't Die" artist = "Big K.R.I.T." cover = {roses} />
          <AlbumCard title = "The Forever Story" artist = "JID" cover = {tfs} />
          <AlbumCard title = "Melt My Eyes, See Your Future" artist = "Denzel Curry" cover = {mmesyf} />
          <AlbumCard title = "NO THANK YOU" artist = "Little Simz" cover = {nothankyou} />
          <AlbumCard title = "2000" artist = "Joey Bada$$" cover = {_2000} />
          <AlbumCard title = "$oul $old $eparately" artist = "Freddie Gibbs" cover = {$$$} />
      </div>
    </div>
  )
}

export default App;
