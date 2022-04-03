import React, {
    createContext, useContext,  useState
} from 'react';
import PropTypes from 'prop-types';

const ActionContext = createContext();

export const useAction = () => useContext(ActionContext)

export const ActionProvider = ({ children }) => {

    const [showModal, setShowModal] = useState(false)

    const handleShowModal = (e) => setShowModal(e =>!e);
    console.log(showModal)
    return (
        <ActionContext.Provider value={{
            showModal,
        setModal:handleShowModal}}>
            {children}
        </ActionContext.Provider>
    );
}
ActionProvider.propTypes = {
    children: PropTypes.node.isRequired
};