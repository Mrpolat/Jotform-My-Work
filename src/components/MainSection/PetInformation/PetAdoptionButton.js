import React from 'react'
import { Link } from 'react-router-dom';

const PetAdoptionButton = (props) => {
  return (
    <div className={props.style}><Link className={props.linkStyle} to={props.path}>{props.name}</Link> </div>
  )
}

export default PetAdoptionButton