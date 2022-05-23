import React from 'react'

const petDescription = ({ children }) => {
  return (
    <div className='w-96 h-64 relative left-[400px] top-16 bg-gray-200 rounded-lg border-solid shadow-3xl'>      
        {children}      
    </div>
  )
}

export default petDescription