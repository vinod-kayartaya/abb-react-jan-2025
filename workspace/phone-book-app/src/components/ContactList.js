import ContactCard from './ContactCard';

const ContactList = ({ contacts, deleteContact }) => {
  const contactsJsx = contacts.map((contact) => (
    <ContactCard
      key={contact.id}
      contact={contact}
      deleteContact={deleteContact}
    />
  ));

  return (
    <>
      <div>{contactsJsx}</div>
    </>
  );
};

export default ContactList;
