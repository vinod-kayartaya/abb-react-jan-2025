import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';

const initialContacts = [
  {
    id: 1,
    firstname: 'John',
    lastname: 'Doe',
    email: 'johndoe@xmpl.com',
    phone: '123-456-7890',
  },
  {
    id: 2,
    firstname: 'Jane',
    lastname: 'Smith',
    email: 'janesmith@xmpl.com',
    phone: '234-567-8901',
  },
  {
    id: 3,
    firstname: 'Alice',
    lastname: 'Johnson',
    email: 'alicejohnson@xmpl.com',
    phone: '345-678-9012',
  },
  {
    id: 4,
    firstname: 'Bob',
    lastname: 'Brown',
    email: 'bobbrown@xmpl.com',
    phone: '456-789-0123',
  },
  {
    id: 5,
    firstname: 'Charlie',
    lastname: 'Davis',
    email: 'charliedavis@xmpl.com',
    phone: '567-890-1234',
  },
  {
    id: 6,
    firstname: 'Eve',
    lastname: 'Miller',
    email: 'evemiller@xmpl.com',
    phone: '678-901-2345',
  },
];

const App = () => {
  const [contacts, setContacts] = useState(initialContacts);

  const addContact = (contact) => {
    // add the contact to the list of contacts
    if (contacts.length === 0) {
      contact.id = 1;
    } else {
      const maxId = Math.max(...contacts.map((c) => c.id));
      contact.id = maxId + 1;
    }
    setContacts([contact, ...contacts]);
    console.log('added contact:', contact);
  };

  const deleteContact = (id) => {
    // delete the contact witht the given id
    const newContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(newContacts); // re-renders the component, after updating the state
  };

  return (
    <>
      <Header contacts={contacts} />
      <div className='container' style={{ minHeight: '600px' }}>
        <div className='row'>
          <div className='col-6'>
            <ContactList contacts={contacts} deleteContact={deleteContact} />
          </div>
          <div className='col-6'>
            <ContactForm addContact={addContact} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;
