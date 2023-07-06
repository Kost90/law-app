

export default function ContactWindow({
  contact,
  onDeleteContact,
}) {

  return (
    <div>
      <h1>YOUR CONTACTS INFO</h1>
      <p>{contact.name}</p>
      <p>{contact.email}</p>
      <p>{contact.phone}</p>
      <p>{contact.comment}</p>
      <button
        onClick={() => onDeleteContact(contact.id, contact.delete)}
      >
        Delete contact
      </button>
    </div>
  );
}
