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
        <li className={styles.flexli}>Corporate law:
        <ul className={styles.flexli}>
        <li>Create company</li>
        <li>Remove company</li>
        <li>Add owners</li>
        </ul>
        </li>
        <li className={styles.flexli}>Property law:
        <ul className={styles.flexli}>
        <li>Build new building</li>
        <li>Building reconstruction</li>
        <li>Help with sale your property building</li>
        </ul>
        </li>
        <li className={styles.flexli}>Imigration law:
        <ul className={styles.flexli}>
        <li>Make document for visa</li>
        <li>Continue visa</li>
        <li>Help with residence</li>
        </ul>
        </li>
      </ul>
      <ul>
      <h3 className={styles.lipopup}>Do you want to calculate the cost of the service</h3>
      <button type="button" onClick={handleOpen}>Press to calculate</button>
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
