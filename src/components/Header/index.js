import React from 'react'
import { useUser } from '../../context/user';
import { Link } from 'react-router-dom';
import { IoExitOutline } from 'react-icons/io5'
import { ReactComponent as IconPetPaw } from '../../assets/iconPetPaw.svg'
import { useAction } from '../../context/action';


const Header = () => {

  const { setModal, success, setSuccess, setModalContent } = useAction();


  const userName = useUser();

  const handleEvent = () =>{
    setModal(true);
    setModalContent("login")
  }

  return (
    <div className='jfHeader'>

      <Link to="/" className='jfHeader-logo-title'>JOTFORMVTK <IconPetPaw className="jfHeader-logo" /> </Link>
      {success ? (<IoExitOutline className='ExitOutline' onClick={() => setSuccess(false)} />) : null}
      <button
        className='jfHeader-login'
        onClick={() => handleEvent()}
        style={success ? { pointerEvents: 'none' } : { pointerEvents: 'Visible' }} >
        {
          success ?
            (userName) : 'Login'
        }
      </button>



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