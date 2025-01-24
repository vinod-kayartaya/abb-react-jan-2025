import React from 'react';
import '../styles.css';

const ContactCard = ({ contact }) => {
  return (
    <>
      <h3>
        {contact.firstname} {contact.lastname}
        <button className='app-trash-btn btn btn-link'>
          <i className='bi bi-trash'></i>
        </button>
      </h3>
      <p>Email: {contact.email}</p>
      <p>Phone: {contact.phone}</p>
    </>
  );
};

export default ContactCard;
