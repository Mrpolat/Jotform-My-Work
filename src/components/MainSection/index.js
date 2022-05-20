import React, { useEffect } from 'react'
import {
  useParams,
} from "react-router-dom";
import PetDescription from './PetInformation/PetDescription.js';
import PetImage from './PetInformation/PetImage';
import PetTitle from './PetInformation/PetTitle';
import PetAdoptionButton from './PetInformation/PetAdoptionButton';
import PetBackHomeButton from './PetInformation/PetBackHomeButton';
import RightSideBar from '../RightSideBar';
import { useAction } from '../../context/action';
import { AnimalData } from '../../Data/AnimalSubData';

const MainSection = () => {
  const { setHandleSelectedID } = useAction();
  let AnimalAnswerData = AnimalData();
  let { subid } = useParams();

  useEffect(() => {
    setHandleSelectedID(subid);
  }, [setHandleSelectedID, subid]);

  return (
    <div className='jfMainSection'>
      {
        <div key={AnimalAnswerData.id}>
          <PetImage prop={AnimalAnswerData.Image} />
          <PetTitle prop={AnimalAnswerData.Title} />
          <PetDescription>
            <div className='jfMainSection-information-item'>Owner: {AnimalAnswerData.OwnerFirst + " " + AnimalAnswerData.OwnerLast}</div>
            <div className='jfMainSection-information-item'>Adoption Status: {AnimalAnswerData.AdopStatus}</div>
            <div className='jfMainSection-information-item'>Pet Id: {AnimalAnswerData.PetID}</div>
            <div className='jfMainSection-information-item'>Phone Number: {AnimalAnswerData.PhoneNumber}</div>
            <div className='jfMainSection-information-item'>Breed of: {AnimalAnswerData.BreedOf}</div>
            <div className='jfMainSection-information-item'>About Animal: {AnimalAnswerData.AboutAnimal}</div>
            <div className='jfMainSection-information-item'>{
              (AnimalAnswerData.AdopStatus === 'Derelict') ? (
                <PetAdoptionButton style={"AdoptionButton"} name={'Adoption'} />
              ) : <PetBackHomeButton />
            }</div>
          </PetDescription>
          <div>
            {
              (AnimalAnswerData.AdopStatus === 'Derelict') ? (
                <RightSideBar />
              ) : null
            }
          </div>
        </div>
      }

    </div>
  )
}
export default MainSection


