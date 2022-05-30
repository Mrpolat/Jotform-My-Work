import classNames from 'classnames';
import React from 'react'
import { useCandidate } from '../../context/candidate';
import { useModal } from '../../context/modal';
import { useSub } from '../../context/submission';
import { HandleDate } from '../../Data/DateConverter';

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
    <div className='w-[25%] h-auto mt-[1px] border-0 border-solid  inline absolute right-0 top-0 shadow-3xl rounded-2xl '>
      <div className='jfRightSideBar-title rounded-2xl rounded-b-none '>
        Candidates
      </div>
      {
        (adaptionParsedData.length!==0) ?
          (
            adaptionParsedData.flat(1).map((sub,index,row) =>
              <div
                onClick={() => HandleEvent(sub.id)}
                to={sub.id}
                key={sub.id}
                className={classNames('jfRightSideBar-item ', (index+1===row.length) && ' rounded-b-2xl')}>
                <div className='p-1 pl-3'>
                  <span className='block'>
                    {sub.answers[4].answer.first + " " + sub.answers[4].answer.last}
                  </span>
                  <span className=''>
                    {
                   HandleDate(sub.created_at)
                    }
                  </span>
                </div>
              </div>
            )
          ) : <div className="jfRightSideBar-item leading-10 rounded-b-2xl pointer-events-none text-center">
            Bu hayvan için aday bulunamadı
          </div>


      }

    </div>
  )

}

export default RightSideBar