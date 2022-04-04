import React from 'react'
import { useSub } from '../../context/submission';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
const SideBar = () => {

  const { submissions } = useSub();


  return (
    <div className='jfSideBar'>
      {
        submissions.map(sub =>
          <Link
            to={sub.id}
            key={sub.id}
            className={classnames('jfSideBar-item', sub.answers[11].answer === 'Derelict' && 'jfSideBar-item')}>
            <div className='jfSideBar-item-pad'>
               <span className='jfSideBar-item-petName'>
              {sub.answers[7].answer} 
              </span>
              <span  className='jfSideBar-item-ownerName'>        
                {sub.answers[8].answer.first + " " + sub.answers[8].answer.last}
              </span>
            </div>
          </Link>)
      }
    </div>
  )
};
export default SideBar