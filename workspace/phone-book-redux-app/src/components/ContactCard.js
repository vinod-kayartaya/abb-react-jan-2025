import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../redux/action-creators/phonebook-action-creators';

import '../styles.css';

const ContactCard = ({ contact }) => {
  // react-redux provides a hook called useDispatch to dispatch actions
  const dispatch = useDispatch();

  return (
    <>
      <h3>
        {contact.firstname} {contact.lastname}
        <button
          onClick={() => dispatch(deleteContact(contact.id))}
          className='app-trash-btn btn btn-link'
        >
          <i className='bi bi-trash'></i>
        </button>
      </h3>
      <p>Email: {contact.email}</p>
      <p>Phone: {contact.phone}</p>
    </>
  );
};

export default ContactCard;
