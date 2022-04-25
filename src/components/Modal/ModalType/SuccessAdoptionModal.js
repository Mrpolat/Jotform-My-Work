import React from 'react'
import { AiOutlineCheckCircle } from 'react-icons/ai';
import Modal from '..'

const SuccessAdoptionModal = () => {
    return (
        <Modal>
            <div>
                <AiOutlineCheckCircle className='OutlineCheck' />
                <div className='success'>Adoption Successful</div>
            </div>
        </Modal>
    )
}

export default SuccessAdoptionModal