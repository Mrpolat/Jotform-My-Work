import React from 'react'
import { useSub } from '../../context/submission';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
const SideBar = () => {
  
  const {submissions} = useSub();  

  
  return (
    <div className='jfSideBar'>
      {
      submissions.map(sub=> 
      <Link 
      to={sub.id} 
      key={sub.id} 
      className={classnames('jfSideBar-item', sub.answers[11].answer === 'Derelict' && 'jfSideBar-derelict')}>
        <div className='jfSideBar-item-pad'>
        {sub.answers[7].answer}
        </div>
        </Link>)
      }
    </div>
  )
};
export default SideBar

