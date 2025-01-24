import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SELECT_CONTACT,
  UPDATE_CONTACT,
} from '../action-types/phonebook-types';

export const addContact = (contact) => {
  return {
    type: ADD_CONTACT,
    payload: contact,
  };
};

export const updateContact = (contact) => {
  return {
    type: UPDATE_CONTACT,
    payload: contact,
  };
};

export const deleteContact = (id) => {
  return {
    type: DELETE_CONTACT,
    payload: id,
  };
};

export const selectContact = (contact) => {
  return { type: SELECT_CONTACT, payload: contact };
};
