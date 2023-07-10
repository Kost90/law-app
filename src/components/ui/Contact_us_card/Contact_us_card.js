import styles from './Contact_us_card.module.css'
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'
import { memo } from 'react'

const Contactuscard = memo (() => {
  return (
    <div className={styles.flex_container}>
          <h2>CONTACT US</h2>
          <Button color="primary" variant="contained" size="medium"><Link to="contactus">click to contact us</Link></Button>
    </div>
  )
})

export default Contactuscard