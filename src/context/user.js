import React, {
    createContext, useContext, useEffect, useState
} from 'react';
import PropTypes from 'prop-types';
import { Login, user } from '../api/api';
import { useModal } from './modal';
import { useCookies } from 'react-cookie';

const UserContext = createContext();

export const useUser = () => useContext(UserContext)

export const UserProvider = ({ children }) => {

    const [userName, setUserName] = useState('Login');
    const [error, setError] = useState()//Login requestinde hatayı setler
    const [cookies, setCookie] = useCookies(['LoginStatus']);
    const handleLogout = () => setCookie('LoginStatus', 'false', { path: '/' });
    const ModalContext = useModal()

    useEffect(() => {
       user().then(response=>{
        setUserName(response.data.content.username)
        console.log(response)
    })
      }, []);
      const handleLoginData = ({username,password}) => {
        Login({username:username ,password:password}).then(
            response=>{console.log(response)
                if(response.data.responseCode===200){
                    setCookie('LoginStatus', 'true', { path: '/' });
                    ModalContext.setModalContent('successLogin')
                }         
                else{
                    setError("username and password do not match")
                }   
        })
    }      
    console.log(cookies)
    return (
        <UserContext.Provider value={{
            cookies,
            userName,
            setRemoveCookie: handleLogout,
            setLogin: handleLoginData,
            error,
            }}>
            {children}
        </UserContext.Provider>
    );
}
UserProvider.propTypes = {
    children: PropTypes.node.isRequired
};