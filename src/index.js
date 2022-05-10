import React from 'react';
import ReactDOM from 'react-dom';
import './style/style.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { UserProvider } from './context/user';
import { SubProvider } from './context/submission'
import { ActionProvider } from './context/action';
import { ModalProvider } from './context/modal';
import { CandidateProvider } from './context/candidate';

ReactDOM.render(

  <React.StrictMode>
    <ModalProvider>
      <UserProvider>
        <ActionProvider>
          <SubProvider>
            <CandidateProvider>
              <App />
            </CandidateProvider>
          </SubProvider>
        </ActionProvider>
      </UserProvider>
    </ModalProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
