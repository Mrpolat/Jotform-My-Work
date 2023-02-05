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
import { useUser } from '../../context/user.js';
import { censorWord } from '../../Data/CensorWord.js';
const MainSection = () => {
  const { setHandleSelectedID,selectedID } = useAction();
  const {cookies} = useUser();
  let AnimalAnswerData = AnimalData();
  let { subid } = useParams();
  console.log(subid)
  useEffect(() => {
    setHandleSelectedID(subid);
  }, [setHandleSelectedID, subid]);

  const itemStyling = "p-2"
  return (
    <div className='w-4/5 h-[88%] absolute right-0 inline-block top-[92px]  '>
      {
        <div key={AnimalAnswerData.id}>
          <div className='h-[330px]'>
          <PetImage Image={AnimalAnswerData.Image} /> 
          <PetDescription>
            <div className={itemStyling}>Name: {  AnimalAnswerData.Title}</div>
            <div className={itemStyling}>Owner: { 
            (cookies.LoginStatus==="true") ? (AnimalAnswerData.OwnerFirst + " " + AnimalAnswerData.OwnerLast)
            :censorWord(AnimalAnswerData.OwnerFirst)+ " " +censorWord(AnimalAnswerData.OwnerLast)}
            </div>
            <div className={itemStyling}>Adoption Status: {AnimalAnswerData.AdopStatus}</div>
            <div className={itemStyling}>Pet Id: {AnimalAnswerData.PetID}</div>
            <div className={itemStyling}>Phone Number: {(cookies.LoginStatus==="true") ? (AnimalAnswerData.PhoneNumber):"(***) *** ** **"}</div>
            <div className={itemStyling}>Breed of: {AnimalAnswerData.BreedOf}</div>
          </PetDescription>         
          </div>
          <div className='w-[32%] relative left-[398px] mt-2 mb-4 '>{
              (AnimalAnswerData.AdopStatus === 'Derelict') ? ( 
                <PetAdoptionButton path={`AdaptionForm/&petId=${selectedID}`} Style={"AdoptionButton"}  name={'Adoption Form'} />
              ) : (cookies.LoginStatus==="true") ?(<PetBackHomeButton />):null
            }</div>          
          <div className='w-[62%]  ml-8 p-8 bg-gray-200 rounded-lg border-solid shadow-3xl'> {AnimalAnswerData.AboutAnimal}</div>   
          <div>
            {
              (AnimalAnswerData.AdopStatus === 'Derelict') && (cookies.LoginStatus==="true") ? (
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


