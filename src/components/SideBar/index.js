import React from 'react'
import { useSub } from '../../context/submission';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
// import SearchBar from '../SearchBar';
const SideBar = () => {

  const { animalSubmissions } = useSub();
  return (
    <div className='jfSideBar'>
      {/* <div>
        <SearchBar/>
      </div> */}
      {
        animalSubmissions.map((sub) =>
          <Link
            to={sub.id}
            key={sub.id}
            className={classnames('jfSideBar-item', sub.answers[11].answer === 'Derelict' && 'jfSideBar-item')}>
            <div className='jfSideBar-item-pad'>
               <span className='jfSideBar-item-petName'>
              {sub.answers[7].answer} 
              </span>
              <span  className='jfSideBar-item-ownerName'>        
                {sub.answers[8].answer.first + " " + sub.answers[8].answer.last}
              </span>
              <span className={classnames('jfSideBar-item-status', sub.answers[11].answer === 'Derelict' && 'jfSideBar-item-status-derelict')}>{
               (sub.answers[11].answer === 'Derelict')?("Derelict"):("owned")
              }</span>
            </div>
          </Link>)
      }
    </div>
  )
};
export default SideBar