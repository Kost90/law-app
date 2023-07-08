import {useDataContext} from '../../Context/UseContext'
import { Link } from 'react-router-dom';
import styles from './ServiceResult.module.css';
import { memo } from 'react';

const prices = {
  'Create company': 300,
  'Remove company': 500,
  'Add owners': 150,
  'New building': 1000,
  'Building reconstruction': 500,
  'Sale building': 400,
  'Make visa': 350,
  'Continue visa': 200,
  'Residence': 1000,
};

let price = '';

const Serviceresult = memo (() => {

const {data} = useDataContext()

for (const [key, value] of Object.entries(prices)) {
  if(data.service === key){
    price = value;
  }
}

  return (
    <div className={styles.flex_container}>
        <h1>Resuly of service estimate:</h1>
        <p>Area of law: {data.law}</p>
        <p>Service you choosed: {data.service}</p>
        <p>Price start from: {price}$</p>
        <h2>If you have a question:</h2>
        <button className={styles.button}><Link to="/contactus">Contact us</Link></button>
        <h2>If you want to speake with our lawyer:</h2>
        <button className={styles.button}><Link to="/bookappointment">Book appointment</Link></button>
    </div>
  )
})

export default Serviceresult
