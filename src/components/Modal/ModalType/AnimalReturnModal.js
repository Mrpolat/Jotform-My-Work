import React from 'react'
import Modal from '..'
import { useCandidate } from '../../../context/candidate';

const AnimalReturnModal = () => {
    const { editPetReturn } = useCandidate();
    const handleEvent = () => {
        editPetReturn()
    }
    return (
        <Modal>
            <div>
                <button
                    className='jfOwnerInformationModal-button reject'>
                    No
                </button>
                <button
                    onClick={() => handleEvent()}
                    className='jfOwnerInformationModal-button approve'>
                    Yes
                </button>
            </div>
        </Modal>
    )
}

export default AnimalReturnModal