
import FormContact from "../../components/ui/Form/Formcontact/FormContact";
import useDataContext from "../../components/Context/UseContext";
import styles from './Contact_us.module.css'


export default function Contactus() {
  const { onDeleteContact, contactstate, setcontactstate } = useDataContext();

  return (
    <div className={styles.flex_container}>
      <h2>Contact us:</h2>
      <p>Leave your message and we call back</p>
      <FormContact />
    </div>
  );
}

