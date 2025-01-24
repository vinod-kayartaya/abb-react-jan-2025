import { selectContact } from '../action-creators/phonebook-action-creators';
import {
  ADD_CONTACT,
  CLEAR_SELECTION,
  DELETE_CONTACT,
  SELECT_CONTACT,
  UPDATE_CONTACT,
} from '../action-types/phonebook-types';

const initialState = {
  contacts: [],
  selectedContact: null,
};

function phonebookReducer(state = initialState, action) {
  console.log('phonebookReducer', state, action);
  // based on the action type, we will return the modified version of state

  if (action.type === SELECT_CONTACT) {
    return { ...state, selectedContact: action.payload };
  }

  if (action.type === CLEAR_SELECTION) {
    return { ...state, selectedContact: null };
  }

  if (action.type === DELETE_CONTACT) {
    const { contacts } = state;
    const remainingContacts = contacts.filter(
      (contact) => contact.id !== action.payload
    );

    return { ...state, contacts: remainingContacts };
  }

  if (action.type === ADD_CONTACT) {
    const contact = action.payload;
    contact.id = new Date().getTime();
    return { ...state, contacts: [contact, ...state.contacts] };
  }

  if (action.type === UPDATE_CONTACT) {
    const { contacts } = state; // const contacts = state.contacts;
    const index = contacts.findIndex((c) => c.id === action.payload.id);
    if (index !== -1) {
      contacts[index] = action.payload;
    }
    return { ...state, contacts, selectContact: null };
  }

  return state;
}

export default phonebookReducer;
