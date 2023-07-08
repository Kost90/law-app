import React from 'react'
import styles from './Footer.module.css'
import { memo } from 'react'

const Footer = memo (() => {
  return (
    <footer>
            <div className={styles.flex_container}>
              <ul className={styles.flex_container_ul}>
                <li>Email:kostdonc90@gmail.com</li>
                <li>Phone number: 380637306501</li>
                <li>Adrees: United Kingdom, Londoon</li>
              </ul>
            </div>
    </footer>
  )
})

export default Footer
