import React from 'react'
import Servicescard from '../components/Servicescard';
import Ourteamcard from '../components/Ourteamcard';
import Bookappointmentcard from '../components/Bookappointmentcard';
import Contactuscard from '../components/Contactuscard';


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
