import React from 'react'
import {MdClose} from 'react-icons/md'
import { useAction } from '../../context/action';

const Modal=()=> {

  const {showModal,setModal} = useAction();
  return (
      <>{showModal? (
        <div className='jfModal-backGround'>
            <div className='jfModal-modalWrapper' >
                <div className='jfModal-modalContent'>
                  <label className='userLoginLabel' htmlFor="">UserName:</label>
                  <input className='jfuserLoginInput' type="text" />
                  <br />
                  <label className='userLoginLabel' htmlFor="">Password:</label>
                  <input className='jfuserLoginInput' type="text" />
                    <div className='jfModal-closeModalButton' aria-label='close modal' onClick={()=> setModal(false)}>
                        <MdClose/>
                    </div>
                </div>
            </div>
        </div>

      ):null}
    </>
  )
}

export default Modal