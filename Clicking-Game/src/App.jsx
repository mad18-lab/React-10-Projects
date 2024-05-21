import { useState } from 'react'
import './App.css'
import Landing_Page from './components/Landing Page/Landing_Page'
import HomePage from './components/HomePage/HomePage'

function App() {
  const [isGameStarted, setGameStarted] = useState(false);

  const toggleGame = () => {
    setGameStarted((prev) => !prev);
  }

  return (
    <>
      {isGameStarted ? <HomePage /> : <Landing_Page toggle={toggleGame}/>}
    </>
  )
}

export default App
