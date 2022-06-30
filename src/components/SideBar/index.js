import React, { useEffect, useState } from 'react'
import { useSub } from '../../context/submission';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import SearchBar from '../SearchBar';
import { useAction } from '../../context/action';
const SideBar = () => {

  const { animalSubmissions } = useSub();
  const { selectedID } = useAction();

  const [agree, setAgree] = useState(false);
  const [status, setStatus] = useState('')
  const [input, setInput] = useState('');
  const [checkBoxFilter, setcheckBoxFilter] = useState([])
  const [searchBoxFilter, setsearchBoxFilter] = useState([])

  const checkboxHandler = (e) => {
    setAgree(!agree);
    setStatus(e)
  }
  //2. öncelik
  const updateInput = async (input) => {
    const filtered = checkBoxFilter.filter(sub => {
      return sub.answers[7].answer.toLowerCase().includes(input.toLowerCase())
    })
    setInput(input);
    setsearchBoxFilter(filtered);
  }
  //1. öncelik
  useEffect(() => {
    if (agree === true) {
      setcheckBoxFilter(animalSubmissions.filter(sub => sub.answers[11].answer === status));
    }
    else {
      setcheckBoxFilter(animalSubmissions)
    }
  }, [animalSubmissions, agree, status])

  // 3.öncelik
  useEffect(() => {
    setsearchBoxFilter(checkBoxFilter)
  }, [checkBoxFilter])

  return (
    <div className='w-1/5 h-[88%] overflow-y-auto  absolute inline top-[92px] bg-headerBg text-white'>
      <div className='box-border w-[100%] overflow-visible'>
      <div className='//zindex'>
        <div>
          <SearchBar
            keyword={input}
            setkeyword={updateInput} />
        </div>
        <div className=" p-3 form-check w-full">
          <input  onChange={() => checkboxHandler('Derelict')}
            className="form-check-input appearance-none h-4 p w-4 border border-gray-300 rounded-sm bg-white checked:bg-checkBoxBg checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault"
          />
          <label className="form-check-label inline-block text-white-800" htmlFor="flexCheckDefault">
            Show Derelict
          </label>
        </div>
        <div className=" p-3 form-check w-full">
          <input onChange={() => checkboxHandler('Owned')}
            className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-checkBoxBg checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckChecked"
          />
          <label className="form-check-label inline-block text-white-800" htmlFor="flexCheckChecked">
            Show Owned
          </label>
        </div>
      </div>
      {
        searchBoxFilter.map((sub) =>
          <div key={sub.id} className={classnames('', (sub.id === selectedID) && " border-lowBlue bg-lowBlue border-solid")}>
            <Link
              to={sub.id}
              key={sub.id}
              className={classnames('block h-[50px] bg-lowBlue border-solid border-[1px] text-black rounded-lg m-2', (sub.id === selectedID) && "border-none border-solid")}>
              <div className='text-center'>
                <div className='w-3/4 float-left inline'>
                  <span className='font-bold block text-[17px]'>
                    {sub.answers[7].answer}
                  </span>
                  <span className=''>
                    {sub.answers[8].answer.first + " " + sub.answers[8].answer.last}
                  </span>
                </div>
                <div className={classnames('w-1/4 h-[50px] relative top-[-1px] right-[-1px] pt-3 rounded-r-lg float-right inline bg-orange',
                  sub.answers[11].answer === 'Derelict' && 'bg-darkOrange',
                  (sub.id === selectedID) && "rounded-r-none top-[0px]")}>
                  <span className='text-white font-bold'>
                    {(sub.answers[11].answer === 'Derelict') ? ("Derelict") : ("Owned")}
                  </span>
                </div>
              </div>
            </Link>
          </div>

        )

      }
      </div>
    </div>
  )
};
export default SideBar
