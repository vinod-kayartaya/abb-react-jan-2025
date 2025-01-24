import React from 'react'

const ButtonSet = ({deleteContact, contact}) => {
  return (
    <button
      onClick={() => deleteContact(contact.id)}
      className='app-trash-btn btn btn-link text-danger ms-2'
    >
      <i className='bi bi-trash'></i>
    </button>
  );
}

export default ButtonSet