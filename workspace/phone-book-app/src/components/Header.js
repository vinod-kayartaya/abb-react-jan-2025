import React from 'react';

const Header = ({contacts}) => {
  return (
    <>
      <div className='alert alert-primary'>
        <div className='container'>
          <h1>
            <i className='bi bi-person-lines-fill'></i> Phonebook application
          </h1>
          <small>You have {contacts.length} contacts</small>
        </div>
      </div>
    </>
  );
};

export default Header;
