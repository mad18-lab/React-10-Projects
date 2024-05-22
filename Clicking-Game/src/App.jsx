import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { PlayerProvider } from './context/PlayerContext';
import Landing_Page from './components/Landing Page/Landing_Page'
import HomePage from './components/HomePage/HomePage'
import './App.css';

function App() {
  return (
    <PlayerProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Landing_Page />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </Router>
    </PlayerProvider>
  )
}

export default App
