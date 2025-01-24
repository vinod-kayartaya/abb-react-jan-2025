import React from 'react';
import { useSelector } from 'react-redux';
import ContactCard from './ContactCard';
import '../styles.css';

const ContactList = () => {
  const { contacts } = useSelector((state) => state.phonebookReducer);

  const contactsJsx = contacts.map((c) => (
    <div key={c.id} className='app-contact-card list-group-item'>
      <ContactCard contact={c} />
    </div>
  ));

  return <div className='list-group'>{contactsJsx}</div>;
};

export default ContactList;
