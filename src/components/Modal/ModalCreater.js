import React from 'react';
import AnimalReturnModal from './ModalType/AnimalReturnModal';
import LoginModal from './ModalType/LoginModal';
import OwnerInformationModal from './ModalType/OwnerInformationModal';
import SuccessAdoptionModal from './ModalType/SuccessAdoptionModal';
import SuccessDeleteModal from './ModalType/SuccessDeleteModal';
import SuccessLogin from './ModalType/SuccessLogin';
import SuccessReturn from './ModalType/SuccessReturn';

const ModalCreater=(type)=> {

    if(type==='login') return <LoginModal/>;
    if(type==='successLogin') return <SuccessLogin/>;
    if(type==='ownerInformation') return <OwnerInformationModal/>;
    if(type==='animalReturn') return <AnimalReturnModal/>;
    if(type==='deleteCandidate') return <SuccessDeleteModal/>
    if(type==='adoptionAnimal') return <SuccessAdoptionModal/>
    if(type==='returnAnimal') return <SuccessReturn/>
    
    return null;
}

export default ModalCreater;