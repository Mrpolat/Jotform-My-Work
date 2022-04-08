import React from 'react';
import LoginModal from './LoginModal';
import OwnerInformationModal from './OwnerInformationModal';

const ModalCreater=(type)=> {
    if(type==='login') return <LoginModal/>;
    if(type==='ownerInformation') return <OwnerInformationModal/>;
    return null;
}

export default ModalCreater;