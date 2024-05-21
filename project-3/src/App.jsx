import './App.css'
import HeroSection from './components/HeroSection/HeroSection';
import GamePlay from './components/GamePlay/GamePlay';
import { useState } from 'react';

function App() {
  const [isGameStarted, setGameStarted] = useState(false);

  const toggleGame = () => {
    setGameStarted((prev) => !prev);
  }

  return (
    <>
      {isGameStarted ? <GamePlay /> : <HeroSection toggle={toggleGame}/>}
    </>
  )
}

export default App
