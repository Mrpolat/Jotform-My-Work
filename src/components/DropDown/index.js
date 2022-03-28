import React, { Children} from 'react'

const DropDown = ({props}) => {

  return (
    <div className='jfDropdown'>
        <div className='jfDropdown-title'>
          {/* {props.title} Şimdilik */}
          More
        </div>
        <div className='jfDropdown-content'>
          {/* {props.children} Şimdilik */}
          <div className='jfDropdown-item'>item1</div>
          <div className='jfDropdown-item'>item2</div>
          <div className='jfDropdown-item'>item3</div>
          <div className='jfDropdown-item'>item4</div>
        </div>
    </div>
  )
}

export default DropDown