import React, {
    createContext, useContext, useState
} from 'react';
import PropTypes from 'prop-types';
import { deleteCandidate, editCandidateStatus, editPetReturn, editAdoptedAnimal } from '../api/api';
import { useAction } from './action';

const CandidateContext = createContext();

export const useCandidate = () => useContext(CandidateContext)

export const CandidateProvider = ({ children }) => {

    const [candidateID, setCandidateID] = useState()//rightsidebar da adaylar üzerinde tıklanılanılan kişinin Id si
    const [successDelete, setSuccessDelete] = useState(false)//aday silme işleminde requestin durumunu setler
    const submissionContext = useAction()
    let selectedID = submissionContext.selectedID

    const handleCandidateID = (e) => setCandidateID(e);

    const handleEditCandidateStatus = () => {
        editCandidateStatus(candidateID).then(response => {
            console.log(response)
        })
    }
    const handleEditAdoptedAnimal = ({ usernameFirst, usernameLast, phoneNumber }) => {
        editAdoptedAnimal({ usernameFirst, usernameLast, phoneNumber, selectedID }).then(response => {
            console.log(response)
        })
    }
    const handlePetReturn = () => {
        editPetReturn(selectedID).then(response => {
            console.log(response)
        })
    }
    const handleDeleteCandidate = () => {
        deleteCandidate({ candidateID }).then(
            response => {
                console.log(response)
                if (response.data.responseCode === 200) {
                    setSuccessDelete(true)
                }
            })
    }
    return (
        <CandidateContext.Provider value={{
            candidateID,
            setCandidateID: handleCandidateID,
            editAdoptedAnimal: handleEditAdoptedAnimal,
            editCandidateStatus: handleEditCandidateStatus,
            successDelete,
            deleteCandidate: handleDeleteCandidate,            
            editPetReturn: handlePetReturn
        }}>
            {children}
        </CandidateContext.Provider>
    );
}
CandidateProvider.propTypes = {
    children: PropTypes.node.isRequired
};