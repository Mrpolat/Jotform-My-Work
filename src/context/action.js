import React, {
    createContext, useContext, useState
} from 'react';
import PropTypes from 'prop-types';
import { Login } from '../api/api';

const ActionContext = createContext();

export const useAction = () => useContext(ActionContext)

export const ActionProvider = ({ children }) => {

    const [showModal, setShowModal] = useState(false)

    // const [loginData, setLoginData] = useState({ username: "1 ", password: "2 " })
    // console.log(loginData)

    const handleShowModal = (e) => setShowModal(e => !e);

    const handleLoginData = ({username,password}) => {
        // setLoginData({username:username ,password:password});
        Login({username:username ,password:password}).then(response=>console.log(response))
    }

    return (
        <ActionContext.Provider value={{
            showModal,
            setModal: handleShowModal,
            setLogin: handleLoginData
        }}>
            {children}
        </ActionContext.Provider>
    );
}
ActionProvider.propTypes = {
    children: PropTypes.node.isRequired
};