import styles from './book_appointment_card.module.css'
import {Link} from 'react-router-dom'

function Bookappointmentcard() {
  return (
    <div className={styles.flex_container}>
          <h2>BOOK APPOINTMENT</h2>
          <h3>To book your appointment</h3>
          <button><Link to="bookappointment">click to book</Link></button>
    </div>
  )
}

export default Bookappointmentcard