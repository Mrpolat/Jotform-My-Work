import React from 'react'
import { Link } from 'react-router-dom';

const PetAdoptionButton = (props) => {
  return (
    <div className={props.Style}><Link className={props.linkStyle} to={props.path}>{props.name}</Link> </div>
  )
}

export default PetAdoptionButton