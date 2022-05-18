import React, { useState } from 'react'
import Modal from '..';
import { useUser } from '../../../context/user';
import { ReactComponent as IconPetPaw } from '../../../assets/iconPetPaw.svg';

const LoginModal = () => {

  const { error, setLogin } = useUser();
  const [inputUsername, setInputUsername] = useState('');
  const [inputPassword, setInputPassword] = useState('');

  const handleLoginData = () => {
    setLogin({ username: inputUsername, password: inputPassword })
  }
  return (
    <Modal>
      <div className='jfuserLogin'>
        <div>
          <div className='jfHeader-logo-title' style={{ color: 'black', width: 380, right:50 }}>
            JOTFORMSHELTER
            <IconPetPaw className="jfHeader-logo"style={{ paddingLeft:10 }} />
          </div>
          <label className='jfuserLogin-item jfuserLogin-label' htmlFor="" >Username or Email</label>
          <input className='jfuserLogin-item jfuserLogin-input' type="email" name='email' value={inputUsername} onInput={e => setInputUsername(e.target.value)} />

          <label className='jfuserLogin-item jfuserLogin-label' htmlFor="">Password</label>
          <input className='jfuserLogin-item jfuserLogin-input' type="password" name='password' value={inputPassword} onInput={e => setInputPassword(e.target.value)} />

          <button className='jfuserLogin-item jfuserLogin-button' onClick={() => handleLoginData()}>Login</button>
          {error ?
            <div className="alert">
              Warning! {error}
            </div>
            : null}
        </div>

      </div>
    </Modal>
  )
}

export default LoginModal