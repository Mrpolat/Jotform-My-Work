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
    const [animalSubİD, setAnimalSubİD] = useState([])
   
    const [adaptionSubmissions, setAdaptionSubmissions] = useState([]);    
    const ActionContext = useAction()
    let selectedID = ActionContext.selectedID
    let index = animalSubİD.indexOf(selectedID)
    useEffect(() => {
        formAnimalSubmissions().then(response => {
            console.log(response)
            setAnimalSubmissions(response.data.content)
        })
    }, []);
    useEffect(() => {
        formAdaptionSubmissions().then(response => {
            setAdaptionSubmissions(response.data.content)
           
        })
    }, []);    
    useEffect(() => {
        animalSubmissions.map(data=>{
          return setAnimalSubİD(oldArray => [...oldArray, data.id])
        })      
    }, [animalSubmissions]);

    
   
    return (
        <SubContext.Provider value={{
            index,
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