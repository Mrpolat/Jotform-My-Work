import React from 'react'
import Modal from '.';
import { useAction } from '../../context/action';
import { useSub } from '../../context/submission';

const OwnerInformationModal = () => {

    const { adaptionSubmissions} = useSub();
    const {ownerID} = useAction();

  return (
    <Modal>
         {
        adaptionSubmissions.map(sub => (sub.id === ownerID) ?
          (<div
            to={sub.id}
            key={sub.id}
            className='jfOwnerInformationModal'>
            {(sub.answers[10].answer)? <div>
            <div className='question'>What was your previous pet?</div>
            <div className='answer'>: {sub.answers[10].answer} </div>
            </div>:null}
            <div className='question'>What is your reason for owning a pet?</div>
            <div className='answer'>: {sub.answers[12].answer} </div>
            <div className='question'>Will you be able to show enough concern for your pet?</div>
            <div className='answer'>: {sub.answers[13].answer} </div> 
            <button className='jfOwnerInformationModal-button reject'>Deny</button>
              <button className='jfOwnerInformationModal-button approve'>Approve</button>
          </div>) : null)
      }
    </Modal>
  )
}

export default OwnerInformationModal