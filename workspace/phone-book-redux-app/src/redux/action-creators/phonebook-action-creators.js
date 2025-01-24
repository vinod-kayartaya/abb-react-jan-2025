import {
  ADD_CONTACT,
  DELETE_CONTACT,
  FETCH_CONTACTS,
  SELECT_CONTACT,
  UPDATE_CONTACT,
} from '../action-types/phonebook-types';
import axios from 'axios';

const baseUrl = 'http://localhost:8080/contacts';

// async methods when called always return a PROMISE
export const fetchContacts = async () => {
  const { data } = await axios.get(baseUrl);
  return { type: FETCH_CONTACTS, payload: data };
};

export const addContact = async (contact) => {
  const { data } = await axios.post(baseUrl, contact);

  return {
    type: ADD_CONTACT,
    payload: data,
  };
};

export const updateContact = async (contact) => {
  const { data } = await axios.put(`${baseUrl}/${contact.id}`, contact);
  return {
    type: UPDATE_CONTACT,
    payload: data,
  };
};

export const deleteContact = async (id) => {

  await axios.delete(`${baseUrl}/${id}`)

  return {
    type: DELETE_CONTACT,
    payload: id,
  };
};

export const selectContact = (contact) => {
  return { type: SELECT_CONTACT, payload: contact };
};
