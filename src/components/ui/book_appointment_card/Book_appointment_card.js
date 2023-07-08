import styles from './book_appointment_card.module.css'
import {Link} from 'react-router-dom'
import { memo } from 'react'

const Bookappointmentcard = memo (() => {
  return (
    <div className={styles.flex_container}>
          <h2>BOOK APPOINTMENT</h2>
          <button className={styles.button}><Link to="bookappointment">click to book</Link></button>
    </div>
  )
})

export default Bookappointmentcard