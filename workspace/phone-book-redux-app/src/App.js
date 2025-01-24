import { Provider } from 'react-redux';
import store from './redux/store';
import Header from './components/Header';
import Footer from './components/Footer';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <Provider store={store}>
      <Header />

      <div className='container'>
        <div className='row'>
          <div className='col-6'>
            <ContactList />
          </div>
          <div className='col-6'>
            <ContactForm />
          </div>
        </div>
      </div>

      <Footer />
    </Provider>
  );
}

export default App;
