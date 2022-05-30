import React, { useEffect } from 'react'
import {
  useParams,
} from "react-router-dom";
import PetDescription from './PetInformation/PetDescription.js';
import PetAdoptionButton from './PetInformation/PetAdoptionButton';
import PetBackHomeButton from './PetInformation/PetBackHomeButton';
import RightSideBar from '../RightSideBar';
import { useAction } from '../../context/action';
import { AnimalData } from '../../Data/AnimalSubData';
import PetImage from './PetInformation/PetImage.js';

const MainSection = () => {
  const { setHandleSelectedID } = useAction();
  let AnimalAnswerData = AnimalData();
  let { subid } = useParams();

  useEffect(() => {
    setHandleSelectedID(subid);
  }, [setHandleSelectedID, subid]);

  console.log("animalanswerdata",AnimalAnswerData)
  const itemStyling = "p-2"
  return (
    <div className='w-4/5 h-[88%] absolute right-0 inline-block top-[92px]  '>
      {
        <div key={AnimalAnswerData.id}>
          <div className='h-[330px]'>
          <PetImage Image={AnimalAnswerData.Image} /> 
          <PetDescription>
            <div className={itemStyling}>Name: {AnimalAnswerData.Title}</div>
            <div className={itemStyling}>Owner: {AnimalAnswerData.OwnerFirst + " " + AnimalAnswerData.OwnerLast}</div>
            <div className={itemStyling}>Adoption Status: {AnimalAnswerData.AdopStatus}</div>
            <div className={itemStyling}>Pet Id: {AnimalAnswerData.PetID}</div>
            <div className={itemStyling}>Phone Number: {AnimalAnswerData.PhoneNumber}</div>
            <div className={itemStyling}>Breed of: {AnimalAnswerData.BreedOf}</div>
          </PetDescription>         
          </div>
          <div className='w-[32%] relative left-[398px] mt-2 mb-4 '>{
              (AnimalAnswerData.AdopStatus === 'Derelict') ? (
                <PetAdoptionButton style={"AdoptionButton"} path={"AdaptionForm"} name={'Adoption'} />
              ) : <PetBackHomeButton />
            }</div>          
          <div className='w-[62%]  ml-8 p-8 bg-gray-200 rounded-lg border-solid shadow-3xl'> {AnimalAnswerData.AboutAnimal}</div>   
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


