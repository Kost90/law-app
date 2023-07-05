import React from 'react'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer>
            <div>
              <ul className={styles.footercontainer}>
                <li>Email:kostdonc90@gmail.com</li>
                <li>Phone number: 380637306501</li>
                <li>Adrees: United Kingdom, Londoon</li>
              </ul>
            </div>
    </footer>
  )
}
