import React from 'react'
import { useSub } from '../../context/submission';
import PropTypes from 'prop-types';

const SideBar = ({value}) => {
  
  const submissions = useSub();  
  const handleTransferID = (e) =>{
    value(e)
  }

  return (
    <div className='jfSideBar'>
      {
      submissions.map(sub=> <div key={sub.id} onClick={()=>handleTransferID(sub.id)}  className='jfSideBar-Item'> {sub.answers[7].answer}</div>)
      }
    </div>
  )
};
export default SideBar

SideBar.propTypes = {
  value: PropTypes.func.isRequired
};