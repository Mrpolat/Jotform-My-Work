import React, {
    createContext, useContext,   useState
} from 'react';
import PropTypes from 'prop-types';
import { Login, editSubmission, deleteSubmission } from '../api/api';
import { useSub } from './submission';

const ActionContext = createContext();

export const useAction = () => useContext(ActionContext)

export const ActionProvider = ({ children }) => {

    const [showModal, setShowModal] = useState(false)//aşağıda ki modalcontent ile birleşecek çünkü ikisi aslında aynı işi yapıyor
    const [modalContent, setModalContent] = useState("Empty")//which modal keeps the information to be displayed
    const [ownerID, setOwnerID] = useState()
    const [success, setSuccess] = useState(false)
    const [successDelete,setSuccessDelete] = useState(false)
    const [error, setError] = useState()

    const handleShowModal = () => setShowModal(e => !e);
    const handleModalContent = (e) => setModalContent(e);
    const handleSuccess = (e) => setSuccess(e);
    const handleOwnerID = (e) => setOwnerID(e);

    const submissionContext = useSub()
    let submissionID=submissionContext.selectedID

    const handleEditSubmission = ({usernameFirst,usernameLast,phoneNumber}) => {
        editSubmission({usernameFirst,usernameLast,phoneNumber,submissionID}).then(response => {
            console.log(response)
        })
    }
    const handleDeleteSubmission = () =>{
        deleteSubmission({ownerID}).then(
            response => {console.log(response)
                if(response.data.responseCode===200){
                    setSuccessDelete(true)
                }              
            })
    }
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
            successDelete,
            showModal,            
            setModal: handleShowModal,
            modalContent,
            setModalContent: handleModalContent,
            ownerID,
            setOwnerID,handleOwnerID,
            success,
            setSuccess: handleSuccess,
            error,
            setLogin: handleLoginData,
            editSubmission : handleEditSubmission,
            deleteSubmission : handleDeleteSubmission
        }}>
            {children}
        </ActionContext.Provider>
    );
}
ActionProvider.propTypes = {
    children: PropTypes.node.isRequired
};