import React from 'react'
import { Image } from 'tailwind-react-ui'
const petImage = ({prop}) => {
  return (
    <Image src={prop} className='w-[300px] h-[300px] absolute top-0 pb-1'/>
  )
}

export default petImage