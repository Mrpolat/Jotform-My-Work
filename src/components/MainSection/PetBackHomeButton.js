import React from 'react'
import { useCandidate } from '../../context/candidate';

const PetBackHomeButton = () => {
  const { editPetReturn } = useCandidate();
  const handleEvent = () => {

    editPetReturn();
  }
  return (
    <div className='PetBackHomeButton' onClick={() => handleEvent()}>BackHome</div>
  )
}
export default PetBackHomeButton