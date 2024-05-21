import React, { useState } from 'react'
import styles from './GamePlay.module.css';
import Button from '../Button/Button';
import RollDice from '../RollDice/RollDice';
import Rules from '../Rules/Rules';

const GamePlay = () => {
    const [score, setScore] = useState(0);
    const [selectedNumber, setSelectedNumber] = useState();
    const [isNumber, setNumber] = useState(1);
    const [showRules, setShowRules] = useState(false);

    const generateRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    }

    const rollDice = () => {
        if (!selectedNumber) {
            return;
        }

        const randomNumber = generateRandomNumber(1, 7);
        setNumber((prev) => randomNumber);

        if (selectedNumber == randomNumber) {
            setScore((prev) => prev + randomNumber);
        } else {
            setScore((prev) => prev - 2);
        }

        // setIsSelected(false);
    }

    const handleClick = (value) => {
        setSelectedNumber(value);
        console.log(value);
    }

    const handleReset = () => {
        setScore(0);
    }

  return (
    <div>
        <nav className={styles.navigation}>
            <div className={styles.topLeft}>
                <div>
                    <p className={styles.zero}>{score}</p>
                </div>
                <div>
                    <p className={styles.score}>Total Score</p>
                </div>
            </div>
            <div>
                <div className={styles.buttons}>
                    <Button text="1" onClick={handleClick} isSelected={selectedNumber == 1}/>
                    <Button text="2" onClick={handleClick} isSelected={selectedNumber == 2}/>
                    <Button text="3" onClick={handleClick} isSelected={selectedNumber == 3}/>
                    <Button text="4" onClick={handleClick} isSelected={selectedNumber == 4}/>
                    <Button text="5" onClick={handleClick} isSelected={selectedNumber == 5}/>
                    <Button text="6" onClick={handleClick} isSelected={selectedNumber == 6}/>
                </div>
                <div>
                    <h3 className={styles.select}>Select Number</h3>
                </div>
            </div>
        </nav>
        <div className={styles.secBut}>
            <RollDice isNumber={isNumber} rollDice={rollDice} />
            <h5 className={styles.clickDice}>Click on Dice to Roll</h5>
            <button className={styles.butt} onClick={handleReset}>Reset Score</button>
            <button className={styles.butt} onClick={() => setShowRules((prev) => !prev)}>{showRules ? "Hide" : "Show"} Rules</button>
            {showRules && <Rules />}
        </div>
    </div>
  )
}

export default GamePlay
