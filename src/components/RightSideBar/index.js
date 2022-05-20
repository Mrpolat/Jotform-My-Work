import React from 'react'
import { useCandidate } from '../../context/candidate';
import { useModal } from '../../context/modal';
import { useSub } from '../../context/submission';
import { AdaptionData } from '../../Data/AnimalSubData';

const RightSideBar = () => {
  const { adaptionParsedData } = useSub();
  const { setModalContent, setModal } = useModal();
  const { setCandidateID } = useCandidate();

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
        adaptionParsedData.flat(1).map(sub => 
          <div
            onClick={() => HandleEvent(sub.id)}
            to={sub.id}
            key={sub.id}
            className='jfRightSideBar-item'>
            <div className='jfRightSideBar-pad'>
              <span className=''>
                {sub.answers[4].answer.first + " " + sub.answers[4].answer.last}
              </span>
            </div>
          </div>
        )
      }
    </div>
  )

}

export default RightSideBar