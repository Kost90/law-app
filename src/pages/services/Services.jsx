import { useState } from "react"
import styles from './Services.module.css'
import { Formservices } from "../../components/ui/Form/Formservices/Formservices";
import Serviceresult from "../../components/ui/serviceresult/Serviceresult";
import {useDataContext} from '../../components/Context/UseContext'

export default function Services() {

  const {data} = useDataContext()

    const [open, setOpen] = useState(false)

    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

  return (
    <div className={styles.flexcontainer}>
      <h2>Our Services:</h2>
      <ul className={styles.flexul}>
        <li>Corporate law</li>
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
      {data !== null && (<Serviceresult/>)}
    </div>
  )
}
