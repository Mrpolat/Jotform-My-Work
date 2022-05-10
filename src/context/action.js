import React, {
    createContext, useContext, useState
} from 'react';
import PropTypes from 'prop-types';

const ActionContext = createContext();

export const useAction = () => useContext(ActionContext)

export const ActionProvider = ({ children }) => {

    const [selectedID, setSelectedID] = useState("");//router yapısında ki urlden gelen id yi setler   
    console.log(selectedID)
    const handleSelectedIDChange = (e) => setSelectedID(e);

    return (
        <ActionContext.Provider value={{
            selectedID,
            setHandleSelectedID: handleSelectedIDChange,
        }}>
            {children}
        </ActionContext.Provider>
    );
}
ActionProvider.propTypes = {
    children: PropTypes.node.isRequired
};