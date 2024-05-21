import React from 'react'
import styles from './Rules.module.css';

const Rules = () => {
  return (
    <div className={styles.main}>
      <h2 className={styles.head}>How To Play the Dice Game</h2>
      <ul className={styles.list}>
        <li>Select Any Number</li>
        <li>Click on the Dice</li>
        <li>If the selected number is equal to the dice number, you will get same number of points as the dice number</li>
        <li>If not, you will be deducted 2 points</li>
      </ul>
      <h4 className={styles.head}>Enjoy!</h4>
    </div>
  )
}

export default Rules
