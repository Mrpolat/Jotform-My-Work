import React, { useEffect } from 'react'
import { useUser } from '../../context/user';
import { Link } from 'react-router-dom';
import { IoExitOutline } from 'react-icons/io5';
import { ReactComponent as IconPetPaw } from '../../assets/iconPetPaw.svg';
import { useModal } from '../../context/modal';
import PetAdoptionButton from '../MainSection/PetInformation/PetAdoptionButton';
// import HeaderStyle from '../../style/HeaderStyle';

const Header = () => {

  const { setModal, setModalContent } = useModal();
  const { userName, success, setSuccess } = useUser();

  const handleEvent = () => {
    setModal(true);
    setModalContent("login");
  }

  return (
    <div className="w-full
      h-1/7
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
        pt-6 
        pl-5 ' 
        to="/" >
        jotformshelter
        <IconPetPaw className="inline pl-2" />
      </Link>
      {success ? 
      (<IoExitOutline className='ExitOutline' onClick={() => setSuccess(false)} />) : 
      null}
      <button
        className='jfHeader-login'
        onClick={() => handleEvent()}
        style={success ? { pointerEvents: 'none' } : { pointerEvents: 'Visible' }} >
        {
          success ?
            (userName) 
            : 'Login'
        }
      </button>
      <div className='jfHeader-menuItem'>
        <PetAdoptionButton name={'Animal'} />
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