import React from 'react'
import { useUser } from '../../context/user';
import { Link } from 'react-router-dom';
import { IoExitOutline } from 'react-icons/io5';
import { ReactComponent as IconPetPaw } from '../../assets/iconPetPaw.svg';
import { useModal } from '../../context/modal';
import PetAdoptionButton from '../MainSection/PetInformation/PetAdoptionButton';
import classnames from 'classnames';
// import HeaderStyle from '../../style/HeaderStyle';

const Header = () => {

  const { setModal, setModalContent } = useModal();
  const { userName, success, setSuccess } = useUser();

  const handleEvent = () => {
    setModal(true);
    setModalContent("login");
  }
  console.log(success)
  return (
    <div className="w-full
      h-30
      absolute
      top-0
      inset-x-0
      uppercase
      bg-headerBg"
    >
      <Link className='text-white 
        inline 
        relative 
        float-left 
        text-2xl 
        p-4
        '
        to="/" >
        jotformshelter
        <IconPetPaw className="inline pl-2" />
      </Link>
      <div className={classnames("float-right relative top-3 pr-8 ", success===true && 'loginButton')}>
        <button
          className="bg-loginBg text-white p-5 rounded-2xl "
          onClick={() => handleEvent()}
          style={(success ? { pointerEvents: 'none' } : { pointerEvents: 'Visible' })} >
          {
            success ?
              (userName)
              : 'Login'
          }
        </button>
        <div className='drop-down-menu'></div>
        <div className={classnames("loginContent shadow-3xl bg-white",success===true && "")} >
          <div className='bg-white mt-[5px] ml-3 h-[40px] w-[180px] rounded-2xl cursor-pointer bg-gray-100 hover:bg-gray-200'
          onClick={() => setSuccess(false)}>
            <div className='inline pl-4 relative top-1.5'>
            <IoExitOutline className='inline text-3xl' />
            </div>
            <span className='float-right pr-4 pt-2.5'>
              Logout
            </span>   
          </div>
        </div>
      </div>
      <div id='headerLine'>
        {/* çizgi */}
      </div>
      <div className='float-right relative top-8 pr-8 '>
        <PetAdoptionButton style={"text-white"} linkStyle={"hover:text-loginBg"} path={"AnimalForm"} name={'Animal Form'} />
      </div>
      

    </div>
  )
}

export default Header

// useEffect(() => {
  //   axios.get(USER_URL).then((response) => {
  //       console.log(response);
  //       setUserName(response.data.content.username)
  //   }).catch(function (error) {
  //       console.log(error);
  //   });
  // }, []);