import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <header>
        <Link to="/">Home</Link>
        <Link to="services">Services</Link>
        <Link to="bookappointment">Book appointment</Link>
        <Link to="ourteame">Our Teame</Link>
        <Link to="contactus">Contact us</Link>
        <button>EN</button>
        <button>UA</button>
    </header>
  )
}

export default NavBar