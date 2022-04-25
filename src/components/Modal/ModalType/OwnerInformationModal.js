import React, { useState } from 'react'
import Modal from '..';
import { useSub } from '../../../context/submission';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { useCandidate } from '../../../context/candidate';
import classNames from 'classnames';

const OwnerInformationModal = () => {
  const [agree, setAgree] = useState(false);
  const { adaptionSubmissions } = useSub();
  const { successDelete, candidateID, editAdoptedAnimal, deleteCandidate, editCandidateStatus } = useCandidate();

  const checkboxHandler = () => {
    // if agree === true, it will be set to false
    // if agree === false, it will be set to true
    setAgree(!agree);
    // Don't miss the exclamation mark
  }
  const handleEvent = (passData) => {
    editAdoptedAnimal({
      usernameFirst: passData[0].first,
      usernameLast: passData[0].last,
      phoneNumber: passData[1]
    });
    editCandidateStatus();
  }

  return (
    <Modal>
      <div>{
        adaptionSubmissions.map(sub => (sub.id === candidateID) ?
          (
            <div
              to={sub.id}
              key={sub.id}
              className='jfOwnerInformationModal'>
              {(sub.answers[10].answer) ? <div>
                <div className='question'>What was your previous pet?</div>
                <div className='answer'>: {sub.answers[10].answer} </div>
              </div> : null}
              <div className='question'>What is your reason for owning a pet?</div>
              <div className='answer'>: {sub.answers[12].answer} </div>
              <div className='question'>Will you be able to show enough concern for your pet?</div>
              <div className='answer'>: {sub.answers[13].answer} </div>
              <div>
                <input type="checkbox" id="agree" onChange={checkboxHandler} />
                <label htmlFor="agree"> I confirm that this animal has been adopted</label>
              </div>
              <button
                disabled={!agree}
                onClick={() => deleteCandidate()}
                className={classNames('jfOwnerInformationModal-button reject disabled', agree === true && 'jfOwnerInformationModal-button actived')}>
                Deny
              </button>
              <button
                disabled={!agree}
                onClick={() => handleEvent([sub.answers[4].answer, sub.answers[7].answer])}
                className={classNames('jfOwnerInformationModal-button approve disabled', agree === true && 'jfOwnerInformationModal-button actived')}>
                Approve
              </button>
            </div>
          ) : null)
      }
      </div>
    </Modal>
  )
}

export default OwnerInformationModal