import {useState} from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css'
import Hamburger from '../Hamburgermenu/Hamburger';

function NavBar() {

  const [isOpen, setsiOpen] = useState(false)

  const toggleHamburger = () =>{
    setsiOpen(!isOpen);
  }

  return (
    <header>
      <ul className={isOpen ? styles.openHamburger: styles.closeHamburger}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="services">Services</Link></li>
        <li><Link to="bookappointment">Book appointment</Link></li>
        <li><Link to="chatpage">Online consultation</Link></li>
        <li><Link to="ourteame">Our Teame</Link></li>
        <li><Link to="contactus">Contact us</Link></li>  
        <li><Link to="profile">Profile</Link></li>  
      </ul>
      <div className={styles.hamburger} onClick={toggleHamburger}>
      <Hamburger isOpen={isOpen}/>
      </div>
    </header>
  )
}

export default NavBar