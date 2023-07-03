import React from 'react'
import {Link} from 'react-router-dom'

function Contactuscard() {
  return (
    <div className='border'>
          <h2>CONTACT US</h2>
          <button><Link to="contactus">click to contact us</Link></button>
    </div>
  )
}

export default Contactuscard