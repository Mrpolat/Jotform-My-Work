
import Index from './pages';
import React from 'react';
import Modal from './components/Modal';
import classNames from 'classnames';
import { useAction } from './context/action';

function App() {

  const {showModal} = useAction();

  return (
    <div className="App">
      <div className={classNames('jfContainer', showModal===true && 'jfContainer-visible')}>
        <Modal  />
      </div>
      <Index  />

    </div>
  );
}

export default App;
{/* <button onClick={openModal} className={classNames('jfButton', showModal===true && 'jfButton-inVisible')}>I'm a modal</button> */}