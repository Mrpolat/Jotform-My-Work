import React from 'react';
import AnimalReturnModal from './ModalType/AnimalReturnModal';
import LoginModal from './ModalType/LoginModal';
import OwnerInformationModal from './ModalType/OwnerInformationModal';

const ModalCreater=(type)=> {
    if(type==='login') return <LoginModal/>;
    if(type==='ownerInformation') return <OwnerInformationModal/>;
    if(type==='animalReturn') return <AnimalReturnModal/>;
    return null;
}

export default ModalCreater;