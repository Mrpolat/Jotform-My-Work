import React, {
    createContext, useContext, useEffect, useState
} from 'react';
import PropTypes from 'prop-types';
import { Login, user } from '../api/api';
import { useModal } from './modal';

const UserContext = createContext();

export const useUser = () => useContext(UserContext)

export const UserProvider = ({ children }) => {

    const [userName, setUserName] = useState('polat');
    const [success, setSuccess] = useState(false)//Login requestinin durumunu setler
    const [error, setError] = useState()//Login requestinde hatayı setler
    const handleSuccess = (e) => setSuccess(e);
    const ModalContext = useModal()

    useEffect(() => {
       user().then(response=>{
        setUserName(response.data.content.username)
    })
      }, []);
      const handleLoginData = ({username,password}) => {
        Login({username:username ,password:password}).then(
            response=>{console.log(response)
                if(response.data.responseCode===200){
                    
                    setSuccess(true);
                    ModalContext.setModalContent('successLogin')
                }         
                else{
                    setError("username and password do not match")
                }   
        })
    }      
    return (
        <UserContext.Provider value={{
            userName,
            success,
            setSuccess: handleSuccess,
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