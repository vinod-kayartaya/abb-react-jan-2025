import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactCard from './ContactCard';
import '../styles.css';
import { fetchContacts } from '../redux/action-creators/phonebook-action-creators';

const ContactList = () => {
  const { contacts } = useSelector((state) => state.phonebookReducer);
  const dispatch = useDispatch();

  // execute when the component is loaded once
  useEffect(() => {
    fetchContacts().then(dispatch);
  }, []);

  const contactsJsx = contacts.map((c) => (
    <div key={c.id} className='app-contact-card list-group-item'>
      <ContactCard contact={c} />
    </div>
  ));

  return <div className='list-group'>{contactsJsx}</div>;
};

export default ContactList;
