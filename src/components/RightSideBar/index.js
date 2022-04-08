import React from 'react'
import { useAction } from '../../context/action';
import { useSub } from '../../context/submission';

const RightSideBar = () => {
  const { adaptionSubmissions, selectedID } = useSub();
  const { setModalContent, setModal,setOwnerID } = useAction();
  return (
    <div className='jfRightSideBar'>
        <div className='jfRightSideBar-title'>
            Candidates
      </div>
      {
        adaptionSubmissions.map(sub => (sub.answers[14].answer === selectedID) ?
          (<div
            onClick={() => (setModal(true), setModalContent("ownerInformation"), setOwnerID(sub.id))}
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