import styles from './Button.module.css';
// import { MdMessage } from "react-icons/md";
import React from 'react';

const Button = (props) => {
  return (
    <div>
        <button onClick={props.onClick} className={props.isOutline ? styles.secondary : styles.primary}> {props.icon} {props.text} </button>
    </div>
  )
}

export default Button
