
import Index from './pages';
import React from 'react';
import classNames from 'classnames';
import { useAction } from './context/action';
import ModalCreater from './components/Modal/ModalCreater';

function App() {

  const {showModal,modalContent} = useAction();

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