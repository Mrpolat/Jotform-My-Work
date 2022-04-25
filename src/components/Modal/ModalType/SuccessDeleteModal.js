import React from 'react'
import { AiOutlineCheckCircle } from 'react-icons/ai';
import Modal from '..';
const SuccessDeleteModal = () => {
    return (
        <Modal>
            <div>
                <AiOutlineCheckCircle className='OutlineCheck' />
                <div className='success'>Delete Successful</div>
            </div>
        </Modal>
    )
}

export default SuccessDeleteModal