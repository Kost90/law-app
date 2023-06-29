import { useState } from "react"
import styles from './Services.module.css'
import { Formservices } from "../../components/Form/Formservices/Formservices"


export default function Services() {

    const [open, setOpen] = useState(false)

    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

  return (
    <div className={styles.flexcontainer}>
      <h2>Our Services:</h2>
      <ul className={styles.flexul}>
        <li>Civil law</li>
        <li>Corporate law</li>
        <li>Family Law</li>
        <li>Property law</li>
        <li>Imigration law</li>
      </ul>
      <ul>
      <li onClick={handleOpen} className={styles.lipopup}>Do you want to calculate the cost of the service</li>
      </ul>
      {open && (
        <div>
            <Formservices/>
            <button className={styles.closebtn} type="button" onClick={handleClose}>
              Close form
            </button>
          </div>
      )}
    </div>
  )
}
