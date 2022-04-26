import React from 'react'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import Modal from '..'

const SuccessLogin=()=> {
  return (
    <Modal>
        <div>
          <AiOutlineCheckCircle className='OutlineCheck' />
          <div className='success'>Login successful</div>
        </div>
    </Modal>
  )
}

export default SuccessLogin