import React from 'react'
import Servicescard from '../../components/ui/service_card/Servicescard'
import Ourteamcard from '../../components/ui/our_team_card/Ourteamcard'
import Bookappointmentcard from '../../components/ui/book_appointment_card/Book_appointment_card'
import Contactuscard from '../../components/ui/Contact_us_card/Contact_us_card'
import styles from './Homepage.module.css'


export default function Homepage() {
  return (
    <div className={styles.background}>
        <h1>LAW APP</h1>
        <div className={styles.flexrow}>
          
          <Servicescard/>
          <Bookappointmentcard/>
          <Ourteamcard/>
          <Contactuscard/>
    
        </div>
    </div>
  )
}
