import React, { useState } from 'react'
import { MdClose } from 'react-icons/md'
import { useAction } from '../../context/action';

const Modal = () => {

  const { showModal, setModal, setLogin } = useAction();

  const [inputUsername, setInputUsername] = useState('');
  const [inputPassword, setInputPassword] = useState('');

  const handleLoginData = ()=>{
    setLogin({username:inputUsername,password:inputPassword})
  }

  return (
    <>{showModal ? (
      <div className='jfModal-backGround'>
        <div className='jfModal-modalWrapper' >
          <div className='jfModal-modalContent'>
            <div className='jfuserLogin'>
              <label className='jfuserLogin-item jfuserLogin-label' htmlFor="" >Username or Email</label>
              <input className='jfuserLogin-item jfuserLogin-input' type="email" name='email' value={inputUsername} onInput={e => setInputUsername(e.target.value)}/>

              <label className='jfuserLogin-item jfuserLogin-label'  htmlFor="">Password</label>
              <input className='jfuserLogin-item jfuserLogin-input' type="password" name='password' value={inputPassword} onInput={e => setInputPassword(e.target.value)} />
              <button className='jfuserLogin-item jfuserLogin-button' onClick={()=>handleLoginData()}>Giriş</button>
              </div>
              <div className='jfModal-closeModalButton' aria-label='close modal' onClick={() => setModal(false)}>
              <MdClose />
            </div>
          </div>
        </div>
      </div>

    ) : null}
    </>
  )
}

export default Modal