import React, {
    createContext, useContext, useEffect, useState
} from 'react';
import PropTypes from 'prop-types';
import { user } from '../api/api';

const UserContext = createContext();

export const useUser = () => useContext(UserContext)

export const UserProvider = ({ children }) => {

    const [userName, setUserName] = useState('polat');

    useEffect(() => {
       user().then(response=>{
        setUserName(response.data.content.username)
    })
      }, []);
      
    return (
        <UserContext.Provider value={userName}>
            {children}
        </UserContext.Provider>
    );
}
UserProvider.propTypes = {
    children: PropTypes.node.isRequired
};