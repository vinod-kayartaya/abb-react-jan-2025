import React from 'react';
import { welcome } from '../utils/example';

const Header = ({ contacts }) => {
  return (
    <>
      <div className='alert alert-primary'>
        <div className='container'>
          <h1>
            <i className='bi bi-person-lines-fill'></i> Phonebook application
          </h1>
          <p className='lead'>{welcome()}</p>
          <small>You have {contacts.length} contacts</small>
        </div>
      </div>
    </>
  );
};

export default Header;
