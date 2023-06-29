import React from 'react'
import Services from './services/Services'
import { Link } from 'react-router-dom';
import Ourteame from './Ourteame';
import Contactus from './Contactus';


export default function Homepage() {
  return (
    <div className='background'>
        <h1>LAW APP</h1>
        <div className='flexrow'>
          <Services/>
          <div className='border'>
          <h2>BOOK APPOINTMENT</h2>
          <h3>To book your appointment</h3>
          <button><Link to="bookappointment">click to book</Link></button>
          </div>
          <Ourteame/>
          <Contactus/>
    
        </div>
    </div>
  )
}
