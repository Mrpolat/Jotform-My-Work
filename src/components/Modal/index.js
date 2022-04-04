import React from 'react'
import { MdClose } from 'react-icons/md'
import { useAction } from '../../context/action';

const Modal = () => {

  const { showModal, setModal } = useAction();
  return (
    <>{showModal ? (
      <div className='jfModal-backGround'>
        <div className='jfModal-modalWrapper' >
          <div className='jfModal-modalContent'>
            <div className='jfuserLogin'>
              <label className='jfuserLogin-item jfuserLogin-label' htmlFor="">Username or Email</label>
              <input className='jfuserLogin-item jfuserLogin-input' type="email" name='email' />

              <label className='jfuserLogin-item jfuserLogin-label'  htmlFor="">Password</label>
              <input className='jfuserLogin-item jfuserLogin-input' type="password" name='password'  />
              <button className='jfuserLogin-item jfuserLogin-button'>Giriş</button>
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