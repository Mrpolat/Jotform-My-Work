import React, {
    createContext, useContext, useEffect, useState
} from 'react';
import PropTypes from 'prop-types';
import { formAnimalSubmissions, formAdaptionSubmissions } from '../api/api';

const SubContext = createContext();

export const useSub = () => useContext(SubContext)

export const SubProvider = ({ children }) => {

    const [animalSubmissions, setAnimalSubmissions] = useState([]);
    const [adaptionSubmissions, setAdaptionSubmissions] = useState([]);
    const [selectedID, setSelectedID] = useState("");
    const handleSelectedIDChange = (e) => setSelectedID(e);//url den id ile setlenen id

 
    
    useEffect(() => {
        formAnimalSubmissions().then(response => {
            console.log(response)
            setAnimalSubmissions(response.data.content)
        })
    }, []);
    useEffect(() => {
        formAdaptionSubmissions().then(response => {
            console.log(response)
            setAdaptionSubmissions(response.data.content)
        })
    }, []);

    return (
        <SubContext.Provider value={{
            animalSubmissions,
            adaptionSubmissions,
            selectedID,
            setHandleSelectedID: handleSelectedIDChange

        }}>
            {children}
        </SubContext.Provider>
    );
}
SubProvider.propTypes = {
    children: PropTypes.node.isRequired
};