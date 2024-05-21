import React from 'react'
import styles from './Button.module.css';

const Button = ({ text, onClick, isSelected }) => {

  const onClickHandler = () => {
    onClick(text);
  }

  return (
    <div>
      <button className={`${isSelected ? styles.selected : styles.but}`} onClick={onClickHandler}> {text} </button>
    </div>
  )
}

export default Button
