import React, {
    createContext, useContext, useState
} from 'react';
import PropTypes from 'prop-types';

const ModalContext = createContext();

export const useModal = () => useContext(ModalContext)

export const ModalProvider = ({ children }) => {

    const [showModal, setShowModal] = useState(false)//modal componentinin açılıp açılmayacağını setler
    const [modalContent, setModalContent] = useState("Empty")//modal componentinin içeriğini setler

    const handleShowModal = () => setShowModal(e => !e);
    const handleModalContent = (e) => setModalContent(e);

    return (
        <ModalContext.Provider value={{
            showModal,
            setModal: handleShowModal,
            modalContent,
            setModalContent: handleModalContent,
        }}>
            {children}
        </ModalContext.Provider>
    );
}
ModalProvider.propTypes = {
    children: PropTypes.node.isRequired
};