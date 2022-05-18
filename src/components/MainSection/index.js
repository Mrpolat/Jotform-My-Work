import React, { useEffect } from 'react'
import { useSub } from '../../context/submission';
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
import { useData } from '../../context/data';
import { AnimalData } from '../../Data/AnimalSubData';
const MainSection = () => {

  const { setHandleSelectedID } = useAction();
  let AnswerData = AnimalData();

  let { subid } = useParams();
  useEffect(() => {
    setHandleSelectedID(subid);
  }, [setHandleSelectedID, subid]);

  return (
    <div className='jfMainSection'>
      {
        <div key={AnswerData.id}>
          <PetImage prop={AnswerData.Image} />
          <PetTitle prop={AnswerData.Title} />
          <PetDescription>
            <div className='jfMainSection-information-item'>Owner: {AnswerData.OwnerFirst + " " + AnswerData.OwnerLast}</div>
            <div className='jfMainSection-information-item'>Adoption Status: {AnswerData.AdopStatus}</div>
            <div className='jfMainSection-information-item'>Pet Id: {AnswerData.PetID}</div>
            <div className='jfMainSection-information-item'>Phone Number: {AnswerData.PhoneNumber}</div>
            <div className='jfMainSection-information-item'>Breed of: {AnswerData.BreedOf}</div>
            <div className='jfMainSection-information-item'>About Animal: {AnswerData.AboutAnimal}</div>
            <div className='jfMainSection-information-item'>{
              (AnswerData.AdopStatus === 'Derelict') ? (
                <PetAdoptionButton name={'Adoption'} />
              ) : <PetBackHomeButton />
            }</div>
          </PetDescription>
          <div>
            {
              (AnswerData.AdopStatus === 'Derelict') ? (
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





       // animalSubmissions.map(sub => sub.id === subid ?
        //   (
        //     <div key={sub.id} >
        //       <PetImage prop={sub.answers[4].answer[0]} />
        //       <PetTitle prop={sub.answers[7].answer} />
        //       <PetDescription>
        //         <div className='jfMainSection-information-item'>Owner: {sub.answers[8].answer.first + " " + sub.answers[8].answer.last}</div>
        //         <div className='jfMainSection-information-item' >Adoption Status: {sub.answers[11].answer}</div>
        //         <div className='jfMainSection-information-item'>Pet Id: {sub.id}</div>
        //         <div className='jfMainSection-information-item'>Phone Number: {sub.answers[9].answer.full}</div>
        //         <div className='jfMainSection-information-item'>Breed of: {sub.answers[6].answer}</div>
        //         <div className='jfMainSection-information-item'>About Animal: {sub.answers[5].answer}</div>
        //         <div className='jfMainSection-information-item'>
        //           {
        //             (sub.answers[11].answer === 'Derelict') ? (
        //               <PetAdoptionButton />
        //             ) : <PetBackHomeButton />
        //           }
        //         </div>
        //       </PetDescription>
        //       <div>
        //         {
        //           (sub.answers[11].answer === 'Derelict') ? (
        //             <RightSideBar />
        //           ) : null
        //         }
        //       </div>
        //     </div>

        //   )
        //   : null

        // )