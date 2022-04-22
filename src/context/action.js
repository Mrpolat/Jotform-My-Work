import React, {
    createContext, useContext,   useState
} from 'react';
import PropTypes from 'prop-types';
import { Login, editSubmission, deleteSubmission,editCandidateStatus,editPetStatusForBack } from '../api/api';

const ActionContext = createContext();

export const useAction = () => useContext(ActionContext)

export const ActionProvider = ({ children }) => {

    const [showModal, setShowModal] = useState(false)//modal componentinin açılıp açılmayacağını setler
    const [modalContent, setModalContent] = useState("Empty")//modal componentinin içeriğini setler
    const [success, setSuccess] = useState(false)//Login requestinin durumunu setler
    const [candidateID, setCandidateID] = useState()//rightsidebar da adaylar üzerinde tıklanılanılan kişinin Id si
    const [indexItem,setIndexItem] = useState();//sidebarda seçilen itemın indexini setler
    const [selectedID, setSelectedID] = useState("");//router yapısında ki urlden gelen id yi setler
    const [successDelete,setSuccessDelete] = useState(false)//aday silme işleminde requestin durumunu setler
    const [error, setError] = useState()//Login requestinde hatayı setler
    
    const handleShowModal = () => setShowModal(e => !e);
    const handleModalContent = (e) => setModalContent(e);
    const handleSuccess = (e) => setSuccess(e);
    const handleCandidateID = (e) => setCandidateID(e);
    const whichItemSelect = (e) => setIndexItem(e); 
    const handleSelectedIDChange = (e) => setSelectedID(e);

    console.log(selectedID)
    const handleEditSubmission = ({usernameFirst,usernameLast,phoneNumber}) => {
        editSubmission({usernameFirst,usernameLast,phoneNumber,selectedID}).then(response => {
            console.log(response)
        })
    }
    const handleEditCandidateStatus = () => {
        editCandidateStatus(candidateID).then(response => {
            console.log(response)
        })
    }
    const handlePetStatusForBack = () => {
        editPetStatusForBack(selectedID).then(response => {
            console.log(response)
        })
    }
    
    const handleDeleteSubmission = () =>{
        deleteSubmission({candidateID}).then(
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
    }
   
    return (
        <ActionContext.Provider value={{
            successDelete,
            showModal,          
            setModal: handleShowModal,
            modalContent,
            setModalContent: handleModalContent,
            candidateID,
            setCandidateID,handleCandidateID,
            success,
            setSuccess: handleSuccess,
            error,
            setLogin: handleLoginData,
            editSubmission : handleEditSubmission,
            deleteSubmission : handleDeleteSubmission,
            indexItem,
            setIndexItem : whichItemSelect,
            selectedID,
            setHandleSelectedID: handleSelectedIDChange,
            editCandidateStatus: handleEditCandidateStatus,
            editPetStatusForBack:handlePetStatusForBack
        }}>
            {children}
        </ActionContext.Provider>
    );
}
ActionProvider.propTypes = {
    children: PropTypes.node.isRequired
};