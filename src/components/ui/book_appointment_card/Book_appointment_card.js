import styles from './book_appointment_card.module.css'
import {Link} from 'react-router-dom'

function Bookappointmentcard() {
  return (
    <div className={styles.flex_container}>
          <h2>BOOK APPOINTMENT</h2>
          <button><Link to="bookappointment">click to book</Link></button>
    </div>
  )
}

export default Bookappointmentcard