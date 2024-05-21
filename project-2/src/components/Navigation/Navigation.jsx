import React from 'react'
import styles from './Navigation.module.css'

const Navigation = () => {
  return (
    <nav className={`${styles.navigation} container`}>
      <div className='nav-logo'>
        <img src="./images/Frame 2 1.png" alt="logo" />
      </div>
      <ul>
        <li href="#">Home</li>
        <li href="#">About</li>
        <li href="#">Contact</li>
      </ul>
    </nav>
  )
}

export default Navigation
