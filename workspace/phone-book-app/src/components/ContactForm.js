import React, { useState } from 'react';

const ContactForm = ({ addContact }) => {
  const [contact, setContact] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
  });

  const changeHandler = (evt) => {
    const { name, value } = evt.target;
    setContact({ ...contact, [name]: value });
  };

  const submitHandler = (evt) => {
    evt.preventDefault();
    addContact(contact);
    setContact({ firstname: '', lastname: '', email: '', phone: '' });
  };

  return (
    <>
      <h3>Add new contact details</h3>

      <form onSubmit={submitHandler}>
        <div className='mb-3'>
          <label htmlFor='firstnameInput' className='form-label'>
            Firstname
          </label>
          <input
            type='text'
            className='form-control'
            id='firstnameInput'
            value={contact.firstname}
            name='firstname'
            onChange={changeHandler}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='lastnameInput' className='form-label'>
            Lastname
          </label>
          <input
            type='text'
            className='form-control'
            id='lastnameInput'
            value={contact.lastname}
            name='lastname'
            onChange={changeHandler}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='emailInput' className='form-label'>
            Email address
          </label>
          <input
            type='email'
            className='form-control'
            id='emailInput'
            value={contact.email}
            name='email'
            onChange={changeHandler}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='phoneInput' className='form-label'>
            Lastname
          </label>
          <input
            type='tel'
            className='form-control'
            id='phoneInput'
            value={contact.phone}
            name='phone'
            onChange={changeHandler}
          />
        </div>

        <button className='btn btn-primary'>Add this contact</button>
      </form>
    </>
  );
};

export default ContactForm;
