import React, {
    createContext, useContext, useState
} from 'react';
import PropTypes from 'prop-types';
import { Login } from '../api/api';

const ActionContext = createContext();

export const useAction = () => useContext(ActionContext)

export const ActionProvider = ({ children }) => {

    const [showModal, setShowModal] = useState(false)
    const [modalContent, setModalContent] = useState("Empty")//which modal keeps the information to be displayed
    const [ownerID, setOwnerID] = useState()
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState()

    const handleShowModal = () => setShowModal(e => !e);
    const handleModalContent = (e) => setModalContent(e);
    const handleSuccess = (e) => setSuccess(e);
    const handleOwnerID = (e) => setOwnerID(e);

    const handleLoginData = ({username,password}) => {
        Login({username:username ,password:password}).then(
            response=>{console.log(response)
                if(response.data.responseCode===200){
                    setSuccess(true)
                }         
                else{
                    setError("username and password do not match")
                }   
        })
        .catch(error => {
              console.log(error)
            }
          )
    }
    return (
        <ActionContext.Provider value={{
            showModal,            
            setModal: handleShowModal,
            modalContent,
            setModalContent: handleModalContent,
            ownerID,
            setOwnerID,handleOwnerID,
            success,
            setSuccess: handleSuccess,
            error,
            setLogin: handleLoginData
        }}>
            {children}
        </ActionContext.Provider>
    );
}
ActionProvider.propTypes = {
    children: PropTypes.node.isRequired
};