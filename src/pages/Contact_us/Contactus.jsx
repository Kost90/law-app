import { useEffect } from "react";
import FormContact from "../../components/ui/Form/Formcontact/FormContact";
import ContactWindow from "../../components/ui/ContactWindow/ContactWindow";
import useDataContext from "../../components/Context/UseContext";
import { urlContact } from "../../api/Contactsapi";

export default function Contactus() {
  const { onDeleteContact, contactstate, setcontactstate } = useDataContext();

  return (
    <div className="border">
      <h2>Contact us:</h2>
      <p>Leave your message and we call back</p>
      <FormContact />
    </div>
  );
}




  // useEffect(() => {
  //   fetch(urlContact)
  //     .then((res) => res.json())
  //     .then((data) => setcontactstate(data));
  // }, []);


// {contactstate.length === 0 ? (
//   <FormContact />
// ) : (
//   <ContactWindow
//     contact={contactstate[0]}
//     onDeleteContact={onDeleteContact}
//   />
// )}