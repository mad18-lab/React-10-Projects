import React, { createContext, useState } from 'react';

export const PlayerContext = createContext();   //creating a Context object called 'PlayerContext'

/* exporting a functional component called PlayerProvider which can wrap around other components to
pass context values (as we see in App.jsx) */
export const PlayerProvider = ({ children }) => {
    const [playerNames, setPlayerNames] = useState({ player1: ' ', player2: ' ' });

  return (
    <PlayerContext.Provider value={{ playerNames, setPlayerNames }}>
      {children}
    </PlayerContext.Provider>
  );
};
