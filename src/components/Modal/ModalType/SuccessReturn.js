import React from 'react';
import { ReactComponent as IconSadCat } from '../../../assets/iconSadCat.svg';
import Modal from '..';
const SuccessReturn = () => {
    
    return (
        <Modal>
            <div>
                <IconSadCat/>
                <div className='success'>Homecoming Successful</div>
            </div>
        </Modal>
    )
}

export default SuccessReturn;