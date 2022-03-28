import React, { useEffect } from 'react'
import PropTypes from 'prop-types';
import { useSub } from '../../context/submission';
import {
  useParams,
} from "react-router-dom";
import PetDescription from './PetDescription.js';
import PetImage from './PetImage';
import PetTitle from './PetTitle';
import PetAdoptionButton from './PetAdoptionButton';

const MainSection = () => {

  const {submissions,setHandleSelectedID} = useSub();

  let { subid } = useParams();

  useEffect(() => {
    setHandleSelectedID(subid);
  },[setHandleSelectedID,subid]);
  
  return (
    <div className='jfMainSection'>
      { 
        submissions.map(sub => sub.id === subid ?
          (<div key={sub.id}>
            <PetImage prop={sub.answers[4].answer[0]}/>            
            <PetTitle prop={sub.answers[7].answer}/>
            <PetDescription>
            <div className='jfMainSection-information-item'>Owner: {sub.answers[8].answer.first +" "+ sub.answers[8].answer.last}</div>
            <div className='jfMainSection-information-item'>Adaption Status: {sub.answers[11].answer}</div>
            <div className='jfMainSection-information-item'>Phone Number: {sub.answers[9].answer.full}</div>
            <div className='jfMainSection-information-item'>Breed of: {sub.answers[6].answer}</div>
            <div className='jfMainSection-information-item'>About Animal: {sub.answers[5].answer}</div>
            <div className='jfMainSection-information-item'>{
            (sub.answers[11].answer==='Derelict')?(
              <PetAdoptionButton />
            ):null               
            }</div>
            </PetDescription>
          </div>
          ) : null
        )
        }
    </div>
  )
}

export default MainSection

MainSection.propTypes = {
  path: PropTypes.string
};
