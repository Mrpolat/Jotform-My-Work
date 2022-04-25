import React from 'react'
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

const MainSection = () => {

  const { animalSubmissions } = useSub();
  // const { indexItem, setHandleSelectedID } = useAction();

  // let animalInformation = animalSubmissions[indexItem];
  let { subid } = useParams();

  // useEffect(() => {
  //   setHandleSelectedID(subid);
  // }, [setHandleSelectedID, subid]);

  return (
    <div className='jfMainSection'>
      {
        animalSubmissions.map(sub => sub.id === subid ?
          (
            <div key={sub.id} >
              <PetImage prop={sub.answers[4].answer[0]} />
              <PetTitle prop={sub.answers[7].answer} />
              <PetDescription>
                <div className='jfMainSection-information-item'>Owner: {sub.answers[8].answer.first + " " + sub.answers[8].answer.last}</div>
                <div className='jfMainSection-information-item' >Adoption Status: {sub.answers[11].answer}</div>
                <div className='jfMainSection-information-item'>Pet Id: {sub.id}</div>
                <div className='jfMainSection-information-item'>Phone Number: {sub.answers[9].answer.full}</div>
                <div className='jfMainSection-information-item'>Breed of: {sub.answers[6].answer}</div>
                <div className='jfMainSection-information-item'>About Animal: {sub.answers[5].answer}</div>
                <div className='jfMainSection-information-item'>
                  {
                    (sub.answers[11].answer === 'Derelict') ? (
                      <PetAdoptionButton />
                    ) : <PetBackHomeButton />
                  }
                </div>
              </PetDescription>
              <div>
                {
                  (sub.answers[11].answer === 'Derelict') ? (
                    <RightSideBar />
                  ) : null
                }
              </div>
            </div>

          )
          : null

        )
      }

    </div>
  )
}

export default MainSection




// ((animalInformation)?
//   (<div key={animalInformation.id}>
//     <PetImage prop={animalInformation.answers[4].answer[0]}/>
//     <PetTitle prop={animalInformation.answers[7].answer}/>
//     <PetDescription>
//     <div className='jfMainSection-information-item'>Owner: {animalInformation.answers[8].answer.first +" "+ animalInformation.answers[8].answer.last}</div>
//     <div className='jfMainSection-information-item'>Adoption Status: {animalInformation.answers[11].answer}</div>
//     <div className='jfMainSection-information-item'>Pet Id: {animalInformation.id}</div>
//     <div className='jfMainSection-information-item'>Phone Number: {animalInformation.answers[9].answer.full}</div>
//     <div className='jfMainSection-information-item'>Breed of: {animalInformation.answers[6].answer}</div>
//     <div className='jfMainSection-information-item'>About Animal: {animalInformation.answers[5].answer}</div>
//     <div className='jfMainSection-information-item'>{
//     (animalInformation.answers[11].answer==='Derelict')?(
//       <PetAdoptionButton />
//     ):<PetBackHomeButton />
//     }</div>
//     </PetDescription>
//   </div>
//   ) : null
//   )