import React, { useState, useEffect } from 'react'
import styles from './HomePage.module.css';

const HomePage = () => {
  const [isSelected, setSelected] = useState(false);
  const [currScore, setScore] = useState(0);
  const [currTimer, setTimer] = useState(30);

  useEffect(() => {
    if (!isSelected) return; // Exit if not selected

    const intervalID = setInterval(() => {
        setTimer(prevTimer => prevTimer - 1);
    }, 1000);

    // Clear interval on component unmount or when isSelected changes to prevent memory leaks
    return () => clearInterval(intervalID);
  }, [isSelected]);

  const toggleClick = () => {
    setSelected((prev) => !prev);
  }

  const handleClick = () => {
    setScore(currScore + 1);
  }

  const handleReset = () => {
    setTimer(30);
  }

  return (
    <div>
      <div className={styles.pl}>
        <div className={styles.pl1}>
          <div>
            <p>{currScore}</p>
            <p>Total Clicks</p>
          </div>
          <div>
            <p>{currTimer}</p>
            <p>Timer</p>
          </div>
        </div>
        <div className={styles.image}>
          <img src={isSelected ? '/images/green_light.PNG' : '/images/red_light.PNG'} alt='light' onClick={toggleClick} />
        </div>
        <div className={styles.buttons}>
          <button className={styles.butt} onClick={handleClick}> Click Me </button>
          <button className={styles.butt} onClick={handleReset}> Reset Timer </button>
        </div>
      </div>

      <hr className={styles.line}></hr>

      <div className={styles.pl}>
        <div className={styles.pl1}>
          <div>
            <p>0</p>
            <p>Total Clicks</p>
          </div>
          <div>
            <p>{currTimer}</p>
            <p>Timer</p>
          </div>
        </div>
        <div className={styles.image}>
          <img src={isSelected ? '/images/green_light.PNG' : '/images/red_light.PNG'} alt='light' onClick={toggleClick} />
        </div>
        <div className={styles.buttons}>
          <button className={styles.butt} onClick={handleClick}> Click Me </button>
          <button className={styles.butt} onClick={handleReset}> Reset Timer </button>
        </div>
      </div>
    </div>
  )
}

export default HomePage
