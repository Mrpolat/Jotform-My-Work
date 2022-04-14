import React, { useState } from 'react'
import { useAction } from '../../context/action';
import { AiOutlineCheckCircle } from 'react-icons/ai'
import Modal from '.';

const LoginModal=()=> {

    const { success, error, setLogin } = useAction();
    const [inputUsername, setInputUsername] = useState('');
    const [inputPassword, setInputPassword] = useState('');
  
    const handleLoginData = () => {
      setLogin({ username: inputUsername, password: inputPassword })
    }
  return (
      <Modal>
          <div className='jfuserLogin'>{(success === false) ?
            (<div>
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
            </div>)
            : <div>
              <AiOutlineCheckCircle className='OutlineCheck' />
              <div className='success'>Login successful</div>
            </div>}
          </div>
          </Modal>
  )
}

export default LoginModal