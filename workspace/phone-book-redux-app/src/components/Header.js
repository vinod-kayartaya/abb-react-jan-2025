import React from 'react';
import { useSelector } from 'react-redux';

const Header = () => {
  const { contacts } = useSelector((state) => state.phonebookReducer);

  return (
    <>
      <div className='alert alert-primary'>
        <div className='container'>
          <h1>
            <i className='bi bi-book'></i> Phonebook Redux App
          </h1>
          <p className='lead'>There are {contacts.length} contacts in your phonebook.</p>
        </div>
      </div>
    </>
  );
};

export default Header;
