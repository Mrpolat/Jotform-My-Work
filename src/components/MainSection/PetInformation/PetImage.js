import React from 'react'
import { Image } from 'tailwind-react-ui'

const petImage = (prop) => {
  return (
    <img src={prop.Image} className='w-[280px] h-[260px] absolute top-[60px] left-[50px] pb-1 rounded-[20px] '/>
  )
}

export default petImage