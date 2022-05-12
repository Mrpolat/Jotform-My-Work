import React, {
    createContext, useContext, useState
} from 'react';
import PropTypes from 'prop-types';
import { useSub } from './submission';

const DataContext = createContext();

export const useData = () => useContext(DataContext)

export const DataProvider = ({ children }) => {

    const subContext = useSub();
    let definedID = subContext.definedID
    let animalInformation = subContext.animalSubmissions[definedID];

    let AnswerData = {
        ID:'',IMAGE:'', TITLE:'',OWNERFIRST:'',OWNERLAST:'',AdopStatus:'',PETID:'',PHONENUMBER:'',BREEDOF:'',ABOUTANIMAL:''
      }
    if (animalInformation) {
        AnswerData.ID=animalInformation.id;
        AnswerData.IMAGE=animalInformation.answers[4].answer[0];
        AnswerData.TITLE=animalInformation.answers[7].answer;
        AnswerData.OWNERFIRST=animalInformation.answers[8].answer.first;
        AnswerData.OWNERLAST=animalInformation.answers[8].answer.last;
        AnswerData.AdopStatus=animalInformation.answers[11].answer;
        AnswerData.PETID=animalInformation.id;
        AnswerData.PHONENUMBER=animalInformation.answers[9].answer.full;
        AnswerData.BREEDOF=animalInformation.answers[6].answer;
        AnswerData.ABOUTANIMAL=animalInformation.answers[5].answer;
      }
     
    return (
        <DataContext.Provider value={{
            AnswerData
        }}>
            {children}
        </DataContext.Provider>
    );
}
DataProvider.propTypes = {
    children: PropTypes.node.isRequired
};