
import Index from './pages';
import React from 'react';
import classNames from 'classnames';
import ModalCreater from './components/Modal/ModalCreater';
import { useModal } from './context/modal';

function App() {

  const {showModal,modalContent} = useModal();

  return (
    <div className="App">
      <div className={classNames('jfContainer', showModal===true && 'jfContainer-visible')}>
        {ModalCreater(modalContent)}
      </div>
      <Index/>
    </div>
  );
}

export default App;