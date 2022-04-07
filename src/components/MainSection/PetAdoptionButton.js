import React from 'react'
import { Link } from 'react-router-dom';

const PetAdoptionButton = () => {
  return (
    <div className='jfMainSection-information-button'><Link className='jfMainSection-AdaptionForm' to="AdaptionForm">Adoption</Link> </div>
  )
}

export default PetAdoptionButton