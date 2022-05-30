import React, {
    createContext, useContext, useEffect, useState
} from 'react';
import PropTypes from 'prop-types';
import { formAnimalSubmissions, formAdaptionSubmissions } from '../api/api';
import { useAction } from './action';

const SubContext = createContext();

export const useSub = () => useContext(SubContext)

export const SubProvider = ({ children }) => {

    const [animalSubmissions, setAnimalSubmissions] = useState([]);
    const [adaptionSubmissions, setAdaptionSubmissions] = useState([]);
    const [animalParsedData, setAnimalParsedData] = useState()
    const [adaptionParsedData, setAdaptionParsedData] = useState([])
    const ActionContext = useAction()
    let selectedID = ActionContext.selectedID

    useEffect(() => {
        formAnimalSubmissions().then(response => {
            console.log(response)
            setAnimalSubmissions(response.data.content)
        })
    }, []);
    //find()
    useEffect(() => {
        setAnimalParsedData(animalSubmissions.find(sub => sub.id === selectedID))
    }, [animalSubmissions, selectedID]);

    
    useEffect(() => {
        let candidates = adaptionSubmissions.filter(sub => (sub.answers[14].answer === selectedID && sub.answers[15].answer === "pending"))
        setAdaptionParsedData(candidates)             
        
    }, [adaptionSubmissions, selectedID]);
    console.log(adaptionParsedData)
    useEffect(() => {
        formAdaptionSubmissions().then(response => {
            setAdaptionSubmissions(response.data.content)
            console.log(response)
        })
    }, []);
        
    return (
        <SubContext.Provider value={{
            animalParsedData,
            adaptionParsedData,
            animalSubmissions,
            adaptionSubmissions,
        }}>
            {children}
        </SubContext.Provider>
    );
}
SubProvider.propTypes = {
    children: PropTypes.node.isRequired
};