import React from 'react';
import '../site.css';
import ButtonSet from './ButtonSet';

const ContactCard = ({ contact, deleteContact }) => {
  return (
    <>
      <div className='app-box'>
        <h3>
          {contact.firstname} {contact.lastname}
          <ButtonSet deleteContact={deleteContact} contact={contact} />
        </h3>
        <p className='lead'>Email: {contact.email}</p>
        <p className='lead'>Phone: {contact.phone}</p>
      </div>
    </>
  );
};

export default ContactCard;
