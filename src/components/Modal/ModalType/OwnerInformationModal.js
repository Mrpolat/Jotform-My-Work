import React, { useState } from 'react'
import Modal from '..';
import { useSub } from '../../../context/submission';
import { useCandidate } from '../../../context/candidate';
import classNames from 'classnames';

const OwnerInformationModal = () => {
  const [agree, setAgree] = useState(false);
  const { adaptionParsedData} = useSub();
  const { candidateID, editAdoptedAnimal, deleteCandidate, editCandidateStatus } = useCandidate();
  
  let parsedData = adaptionParsedData.find(sub => (sub.id === candidateID))

  const checkboxHandler = () => {
    setAgree(!agree);  
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
      <div>
        <div
          to={parsedData.id}
          key={parsedData.id}
          className='jfOwnerInformationModal'>
          {(parsedData.answers[10].answer) ? <div>
            <div className='question'>What was your previous pet?</div>
            <div className='answer'>: {parsedData.answers[10].answer} </div>
          </div> : null}
          <div className='question'>What is your reason for owning a pet?</div>
          <div className='answer'>: {parsedData.answers[12].answer} </div>
          <div className='question'>Will you be able to show enough concern for your pet?</div>
          <div className='answer'>: {parsedData.answers[13].answer} </div>
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
            onClick={() => handleEvent([parsedData.answers[4].answer, parsedData.answers[7].answer])}
            className={classNames('jfOwnerInformationModal-button approve disabled', agree === true && 'jfOwnerInformationModal-button actived')}>
            Approve
          </button>
        </div>
      </div>
    </Modal>
  )
}

export default OwnerInformationModal