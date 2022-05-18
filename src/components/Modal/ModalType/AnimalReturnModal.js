import classNames from 'classnames';
import React, { useState } from 'react'
import Modal from '..'
import { useCandidate } from '../../../context/candidate';
import { useModal } from '../../../context/modal';

const AnimalReturnModal = () => {
    const { editPetReturn } = useCandidate();
    const { showModal,setModal } = useModal();
    const [agree, setAgree] = useState(false);

    const handleEvent = () => {
        editPetReturn()
    }
    const checkboxHandler = () => {
        // if agree === true, it will be set to false
        // if agree === false, it will be set to true
        setAgree(!agree);
        // Don't miss the exclamation mark
    }
    return (
        <Modal>
            <div>
                <div>
                <div className='answer'>A return request has been made for this previously owned animal. If you are sure about your transaction, tick the box below.</div>
                    <input type="checkbox" id="agree" onChange={checkboxHandler} />
                    <label htmlFor="agree"> I confirm that this animal has been return</label>
                </div>
                <button
                    onClick={() => setModal(false)}
                    disabled={!agree}
                    className={classNames('jfOwnerInformationModal-button reject disabled', agree === true && 'jfOwnerInformationModal-button actived')}>
                    No
                </button>
                <button
                    disabled={!agree}
                    onClick={() => handleEvent()}
                    className={classNames('jfOwnerInformationModal-button approve disabled', agree === true && 'jfOwnerInformationModal-button actived')}>
                    Yes
                </button>
            </div>
        </Modal>
    )
}

export default AnimalReturnModal