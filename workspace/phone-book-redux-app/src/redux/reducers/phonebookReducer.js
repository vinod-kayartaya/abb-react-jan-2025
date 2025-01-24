import { DELETE_CONTACT } from '../action-types/phonebook-types';

const initialState = {
  contacts: [
    {
      id: 1,
      firstname: 'John',
      lastname: 'Doe',
      email: 'john.doe@example.com',
      phone: '123-456-7890',
      city: 'New York',
    },
    {
      id: 2,
      firstname: 'Jane',
      lastname: 'Smith',
      email: 'jane.smith@example.com',
      phone: '234-567-8901',
      city: 'Los Angeles',
    },
    {
      id: 3,
      firstname: 'Michael',
      lastname: 'Johnson',
      email: 'michael.johnson@example.com',
      phone: '345-678-9012',
      city: 'Chicago',
    },
    {
      id: 4,
      firstname: 'Emily',
      lastname: 'Davis',
      email: 'emily.davis@example.com',
      phone: '456-789-0123',
      city: 'Houston',
    },
    {
      id: 5,
      firstname: 'David',
      lastname: 'Wilson',
      email: 'david.wilson@example.com',
      phone: '567-890-1234',
      city: 'Phoenix',
    },
  ],
};

function phonebookReducer(state = initialState, action) {
  console.log('phonebookReducer', state, action);
  // based on the action type, we will return the modified version of state

  if (action.type === DELETE_CONTACT) {
    const { contacts } = state;
    const remainingContacts = contacts.filter(
      (contact) => contact.id !== action.payload
    );

    return { ...state, contacts: remainingContacts };
  }
  
  return state;
}

export default phonebookReducer;
