import React, { useEffect } from 'react'
import PropTypes from 'prop-types';
import { useSub } from '../../context/submission';
import {
  Outlet, useParams,
} from "react-router-dom";


const MainSection = () => {

  const {submissions,setHandleSelectedID} = useSub();

  let { subid } = useParams();

  useEffect(() => {
    setHandleSelectedID(subid);
  },[subid]);
  
  return (
    <div className='jfMainSection'>
      { 
        submissions.map(sub => sub.id === subid ?
          (<div key={sub.id}>
            <img className="jfForms-jfImage" src={sub.answers[4].answer[0]} alt="" />
            <div className='jfForms-title'>{sub.answers[7].answer}</div>
            <div className='jfForms-information'>{sub.answers[5].answer}</div>
          </div>
          ) : null
        )
        }
        <Outlet />
    </div>
  )
}

export default MainSection

MainSection.propTypes = {
  path: PropTypes.string
};
