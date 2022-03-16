import React from 'react'
import PropTypes from 'prop-types';
import { useSub } from '../../context/submission';

const MainSection = ({ id }) => {
  const submissions = useSub();
  console.log(id)
  return (
    <div className='jfMainSection'>
      {
        submissions.map(sub => sub.id === id ?
          (<div>
            <img key={sub.id} className="jfForms-jfImage" src={sub.answers[4].answer[0]} alt="" />
            <div className='jfForms-title'>{sub.answers[7].answer}</div>
            <div className='jfForms-information'>{sub.answers[5].answer}</div>
          </div>
          ) : null
        )
      }
    </div>
  )
}

export default MainSection

MainSection.propTypes = {
  id: PropTypes.number
};
