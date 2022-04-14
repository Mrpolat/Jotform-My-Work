import React from 'react'
import { MdClose } from 'react-icons/md'
import { useAction } from '../../context/action';

const Modal = ({children}) => {

  const { showModal,  setModal } = useAction();

  return (
    <>{showModal ? (
      <div className='jfModal-backGround'>
        <div className='jfModal-modalWrapper' >
          <div className='jfModal-modalContent'>
            {
             children
            }
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