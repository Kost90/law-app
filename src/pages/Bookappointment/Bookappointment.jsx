import styles from './Bookappointment.module.css'



export default function Bookappointment() {


  return (
    <div className={styles.flex_container}>
      <h2>BOOK APPOINTMENT</h2>
      <form action="" className={styles.flex_container_form}>
        <label htmlFor="Name">
          Name:
        </label>
        <br />
        <input type="text" placeholder='Name'/>
        <br />
        <label htmlFor="Phone number">
          Phone number:
        </label>
        <br />
        <input type="number" placeholder='Number'/>
        <br />
        <label htmlFor="Date">
          Choose date:
        </label>
        <br />
        <input type="date" />
        <br />
        <input type="submit" />
      </form>
    </div>
  )
}
