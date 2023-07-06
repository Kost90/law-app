import styles from './Contact_us_card.module.css'
import {Link} from 'react-router-dom'

function Contactuscard() {
  return (
    <div className={styles.flex_container}>
          <h2>CONTACT US</h2>
          <button><Link to="contactus">click to contact us</Link></button>
    </div>
  )
}

export default Contactuscard