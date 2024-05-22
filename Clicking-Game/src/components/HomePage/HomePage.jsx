import React, { useState, useEffect } from 'react'
import styles from './HomePage.module.css';
import Player1 from '../PlayerSection/Player1';
import Player2 from '../PlayerSection/Player2';

const HomePage = () => {
  return (
    <div>
        <Player1 />
        <hr className={styles.line}></hr>
        <Player2 />
    </div>
  )
}

export default HomePage
