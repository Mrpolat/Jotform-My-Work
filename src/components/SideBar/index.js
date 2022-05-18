import React, { useEffect, useState } from 'react'
import { useSub } from '../../context/submission';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import SearchBar from '../SearchBar';
const SideBar = () => {

  const { animalSubmissions } = useSub();
  const [agree, setAgree] = useState(false);
  const [status, setStatus] = useState('')
  const [checkBoxFilter, setcheckBoxFilter] = useState([])
  const [searchBoxFilter, setsearchBoxFilter] = useState([])
  const [input, setInput] = useState('');
  
  const checkboxHandler = (e) => {
    setAgree(!agree);
    setStatus(e)
  }
  const updateInput = async (input) => {
    const filtered = checkBoxFilter.filter(sub => {
      return sub.answers[7].answer.toLowerCase().includes(input.toLowerCase())
    })
    setInput(input);
    setsearchBoxFilter(filtered);
  }
  useEffect(() => {
    if (agree === true) {
      setcheckBoxFilter(animalSubmissions.filter(sub => sub.answers[11].answer === status));
    }
    else {
      setcheckBoxFilter(animalSubmissions)
    }
  }, [animalSubmissions, agree, status])

  useEffect(() => {
    setsearchBoxFilter(checkBoxFilter)

  }, [checkBoxFilter])


  console.log(checkBoxFilter)
  console.log(searchBoxFilter)

  return (
    <div className='jfSideBar'>
      <div>
        <SearchBar
          keyword={input}
          setkeyword={updateInput} />
      </div>
      <div className='pl-3'>
        <input className='form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'
          type="checkbox" id="agree"
          onChange={() => checkboxHandler('Derelict')} />
        <label htmlFor="agree"> Sadece Derelictleri göster</label>
      </div>
      <div className='pl-3'>
        <input className='form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'
          type="checkbox" id="agree"
          onChange={() => checkboxHandler('Owned')} />
        <label htmlFor="agree"> Sadece Ownedları göster</label>
      </div>
      {

        searchBoxFilter.map((sub) =>
          <Link
            to={sub.id}
            key={sub.id}
            className='jfSideBar-item'>
            <div className='jfSideBar-item-pad'>
              <span className='jfSideBar-item-petName'>
                {sub.answers[7].answer}
              </span>
              <span className='jfSideBar-item-ownerName'>
                {sub.answers[8].answer.first + " " + sub.answers[8].answer.last}
              </span>
              <span className={classnames('jfSideBar-item-status', sub.answers[11].answer === 'Derelict' && 'jfSideBar-item-status-derelict')}>{
                (sub.answers[11].answer === 'Derelict') ? ("Derelict") : ("owned")
              }</span>
            </div>
          </Link>
        )

      }
    </div>
  )
};
export default SideBar
