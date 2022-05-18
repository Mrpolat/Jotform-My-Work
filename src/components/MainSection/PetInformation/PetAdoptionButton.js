import React from 'react'
import { Link } from 'react-router-dom';

const PetAdoptionButton = ({name}) => {
  return (
    <div className='AdoptionButton'><Link className='jfMainSection-AdaptionForm' to="AdaptionForm">{name}</Link> </div>
  )
}

export default PetAdoptionButton