import React from 'react'
import { useSub } from '../../context/submission';
import { Link } from 'react-router-dom';
const SideBar = () => {
  
  const {submissions} = useSub();  

  
  return (
    <div className='jfSideBar'>
      {
      submissions.map(sub=> <Link to={sub.id} key={sub.id}   className='jfSideBar-Item'> {sub.answers[7].answer}</Link>)
      }
    </div>
  )
};
export default SideBar

