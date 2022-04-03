import React from 'react'
import { useUser } from '../../context/user';
import { Link } from 'react-router-dom';
import { ReactComponent as IconPetPaw } from '../../assets/iconPetPaw.svg'
import { useAction } from '../../context/action';


const Header = () => {

  const {setModal} = useAction();

  const userName = useUser();

  return (
    <div className='jfHeader'>
      
      <Link to="/" className='jfHeader-logo-title'>JOTFORMVTK <IconPetPaw className="jfHeader-logo"/> </Link>
      
       <div className='jfHeader-title' onClick={()=>setModal(true)}>Login</div>
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