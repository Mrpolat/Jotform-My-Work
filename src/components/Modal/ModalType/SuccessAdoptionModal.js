import React from 'react';
import { ReactComponent as IconHappyCat } from '../../../assets/iconHappyCat.svg';
import Modal from '..'

const SuccessAdoptionModal = () => {
    return (
        <Modal>
            <div>
                <IconHappyCat/>
                <div className='success'>Adoption Successful</div>
            </div>
        </Modal>
    )
}

export default SuccessAdoptionModal