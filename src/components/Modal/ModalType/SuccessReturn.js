import React from 'react'
import { AiOutlineCheckCircle } from 'react-icons/ai';
import Modal from '..';
const SuccessReturn = () => {
    return (
        <Modal>
            <div>
                <AiOutlineCheckCircle className='OutlineCheck' />
                <div className='success'>Homecoming Successful</div>
            </div>
        </Modal>
    )
}

export default SuccessReturn;