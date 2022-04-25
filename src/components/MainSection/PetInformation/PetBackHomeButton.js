import React from 'react'
import { useModal } from '../../../context/modal';

const PetBackHomeButton = () => {
  
  const { setModalContent, setModal } = useModal();
  const handleEvent = () => {
    setModal(true);
    setModalContent('animalReturn');
  }
  return (
    <div className='PetBackHomeButton' onClick={() => handleEvent()}>BackHome</div>
  )
}
export default PetBackHomeButton