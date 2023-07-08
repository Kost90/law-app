import styles from './Servicescard.module.css';
import { memo } from 'react';

const Servicescard = memo (() => {
  return (
    <div className={styles.flex_container}>
    <h2>Our Services:</h2>
    <ul className={styles.flex_container_ul}>
      <li>Corporate law</li>
      <li>Property law</li>
      <li>Imigration law</li>
    </ul>
    </div>
  )
})

export default Servicescard