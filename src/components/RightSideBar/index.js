import React from 'react'
import { useAction } from '../../context/action';
import { useCandidate } from '../../context/candidate';
import { useModal } from '../../context/modal';
import { useSub } from '../../context/submission';

const RightSideBar = () => {
  const { adaptionSubmissions } = useSub();
  const { selectedID } = useAction();
  const { setModalContent, setModal } = useModal();
  const {setCandidateID}=useCandidate();
  
  const HandleEvent = (e) => {
    setModal(true);
    setModalContent("ownerInformation");
    setCandidateID(e);
  }
  return (
    <div className='jfRightSideBar'>
      <div className='jfRightSideBar-title'>
        Candidates
      </div>
      {
        adaptionSubmissions.map(sub => (sub.answers[14].answer === selectedID && sub.answers[15].answer === "pending") ?
          (<div
            onClick={() => HandleEvent(sub.id)}
            to={sub.id}
            key={sub.id}
            className='jfRightSideBar-item'>
            <div className='jfRightSideBar-pad'>
              <span className=''>
                {sub.answers[4].answer.first + " " + sub.answers[4].answer.last}
              </span>
            </div>
          </div>) : null)
      }
    </div>
  )

}

export default RightSideBar