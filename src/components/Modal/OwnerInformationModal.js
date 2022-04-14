import React from 'react'
import Modal from '.';
import { useAction } from '../../context/action';
import { useSub } from '../../context/submission';
import { AiOutlineCheckCircle } from 'react-icons/ai';

const OwnerInformationModal = () => {

  const { adaptionSubmissions } = useSub();
  const { successDelete, ownerID, editSubmission, deleteSubmission } = useAction();

  const handleEvent = (passData) => {
    editSubmission({
      usernameFirst: passData[0].first,
      usernameLast: passData[0].last,
      phoneNumber: passData[1]
    });
  }

  return (
    <Modal>
      <div>{(successDelete === false) ? (

        adaptionSubmissions.map(sub => (sub.id === ownerID) ?
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
              <button
                onClick={() => deleteSubmission()}
                className='jfOwnerInformationModal-button reject'>
                Deny
              </button>
              <button
                onClick={() => handleEvent([sub.answers[4].answer, sub.answers[7].answer])}
                className='jfOwnerInformationModal-button approve'>
                Approve
              </button>
            </div>
          ) : null)
      ) : <div>
        <AiOutlineCheckCircle className='OutlineCheck' />
        <div className='success'>Delete successful</div>
      </div>}
      </div>
    </Modal>
  )
}

export default OwnerInformationModal