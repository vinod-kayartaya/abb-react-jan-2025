import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import TaskList from './components/TaskList';
// import ProductList from './components/ProductList';
// import UseEffectDemo from './components/UseEffectDemo';
import Clock from './components/Clock';

function App() {
  const [showClock, setShowClock] = React.useState(true);

  return (
    <>
      <Header />

      {/* <div className='container min-height-700'></div> */}

      <div className='container' style={{ minHeight: '700px' }}>
        <button
          onClick={() => setShowClock(!showClock)}
          className='btn btn-primary mb-3'
        >
          {showClock ? 'Hide Clock' : 'Show Clock'}
        </button>
        {showClock && <Clock />}
        <hr />
        <TaskList />
        {/* <ProductList /> */}
        {/* <UseEffectDemo /> */}
      </div>

      <Footer />
    </>
  );
}

export default App;
