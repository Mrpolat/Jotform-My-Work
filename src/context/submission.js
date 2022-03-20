import React, {
    createContext, useContext, useEffect, useState
} from 'react';
import PropTypes from 'prop-types';
import { formSubmissions } from '../api/api';

const SubContext = createContext();

export const useSub = () => useContext(SubContext)

export const SubProvider = ({ children }) => {

    const [submissions, setSubmissions] = useState([]);
    const [SelectedID, setSelectedID] = useState("");
    const handleSelectedIDChange = (e) => setSelectedID(e);//url den id ile setlenen id
    
    
    useEffect(() => {
        formSubmissions().then(response => {
            console.log(response)
            setSubmissions(response.data.content)
        })
    }, []);

    return (
        <SubContext.Provider value={{
            submissions,
            SelectedID,
            setHandleSelectedID: handleSelectedIDChange

        }}>
            {children}
        </SubContext.Provider>
    );
}
SubProvider.propTypes = {
    children: PropTypes.node.isRequired
};