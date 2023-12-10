import { useState } from 'react';
import './BurguerMenu.scss';

const BurguerMenu = () => {

    const [isOpen, setIsOpen] = useState(false);

    const setOpenedState = () => {
        let reverseOpened = isOpen;
        setIsOpen(!reverseOpened);
    }

    return(
        <div className={isOpen ? 'menu-button' : 'menu-button-open'} onClick={() => setOpenedState()}>
            <div className='menu-button-burguer' />
            <div className='menu-button-burguer' />
            <div className='menu-button-burguer' />
        </div>
    )
}

export default BurguerMenu;