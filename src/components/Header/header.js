import React from 'react'
import { useUser } from '../../context/user';

const Header = () => {

  const userName = useUser();

  console.log(userName)

  return (
    <div className='jfHeader'> <h1 className='jfHeader-title'> jotform veteriner kliniği {userName}</h1></div>
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