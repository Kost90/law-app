import React from 'react'
import styles from './Hamburgermenu.module.css'

function Hamburger({isOpen}) {

  return (
    <div className={styles.hamburger_menu}>
        <div className={isOpen?`${styles.burger} ${styles.burger_1}`:styles.burger}></div>
        <div className={isOpen?`${styles.burger} ${styles.burger_2}`:styles.burger}></div>
        <div className={isOpen?`${styles.burger} ${styles.burger_3}`:styles.burger}></div>
    </div>
  )
}

export default Hamburger