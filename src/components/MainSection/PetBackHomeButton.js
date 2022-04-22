import React from 'react'
import { useAction } from '../../context/action'

const PetBackHomeButton = () => {
  const { editPetStatusForBack}=useAction();
  const handleEvent = () => {
  
    editPetStatusForBack();
  }
  return (
    <div className='PetBackHomeButton' onClick={() => handleEvent()}>BackHome</div>
  )
}

export default PetBackHomeButton