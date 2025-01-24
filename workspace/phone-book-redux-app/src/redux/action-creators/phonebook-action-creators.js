import { ADD_CONTACT, DELETE_CONTACT } from '../action-types/phonebook-types';

export const addContact = (contact) => {
  return {
    type: ADD_CONTACT,
    payload: contact,
  };
};

export const deleteContact = (id) => {
  return {
    type: DELETE_CONTACT,
    payload: id,
  };
};
