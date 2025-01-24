import React, { useEffect, useState } from 'react';
import {
  addContact,
  updateContact,
} from '../redux/action-creators/phonebook-action-creators';
import { useDispatch, useSelector } from 'react-redux';
import { CLEAR_SELECTION } from '../redux/action-types/phonebook-types';

const ContactForm = () => {
  const { selectedContact } = useSelector((state) => state.phonebookReducer);

  const [contact, setContact] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
  });

  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedContact === null) {
      setContact({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
      });
    } else {
      setContact({ ...selectedContact });
    }
  }, [selectedContact]);

  const changeHandler = (evt) => {
    const { name, value } = evt.target;
    setContact({ ...contact, [name]: value });
  };

  const submitHandler = (evt) => {
    evt.preventDefault();

    if (contact.id === undefined) {
      dispatch(addContact(contact));
    } else {
      dispatch(updateContact(contact));
    }
    // dispatch({ type: 'ADD_CONTACT', payload: contact });

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

        <button className='btn btn-primary'>Save</button>
        <button
          onClick={() => dispatch({ type: CLEAR_SELECTION })}
          type='button'
          className='btn btn-link'
        >
          Cancel
        </button>
      </form>
    </>
  );
};

export default ContactForm;
