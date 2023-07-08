import styles from './Our_team_card.module.css';
import { memo } from 'react';

const Ourteamcard = memo (() => {
  return (
    <div className={styles.flex_container}>
      <h2>OUR TEAME:</h2>
      <ul className={styles.flex_container_ul}>
        <li>Mark</li>
        <li>Tim</li>
        <li>Ingus</li>
        <li>Prince</li>
        <li>Manule</li>
        <li>Dalien</li>
        <li>Kostiantyn</li>
      </ul>
    </div>
  )
})

export default Ourteamcard