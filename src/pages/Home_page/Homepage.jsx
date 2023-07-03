import React from 'react'
import Servicescard from '../../components/ui/service_card/Servicescard'
import Ourteamcard from '../../components/ui/our_team_card/Ourteamcard'
import Bookappointmentcard from '../../components/ui/book_appointment_card/Book_appointment_card'
import Contactuscard from '../../components/ui/Contact_us_card/Contact_us_card'


export default function Homepage() {
  return (
    <div className='background'>
        <h1>LAW APP</h1>
        <div className='flexrow'>
          
          <Servicescard/>
          <Bookappointmentcard/>
          <Ourteamcard/>
          <Contactuscard/>
    
        </div>
    </div>
  )
}
