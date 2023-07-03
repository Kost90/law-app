import React from 'react'
import {Link} from 'react-router-dom'

function Bookappointmentcard() {
  return (
    <div className='border'>
          <h2>BOOK APPOINTMENT</h2>
          <h3>To book your appointment</h3>
          <button><Link to="bookappointment">click to book</Link></button>
    </div>
  )
}

export default Bookappointmentcard