import React, { useState } from 'react';
import NavMenu from '../NavMenu/NavMenu.js';
import './BurguerMenu.scss';

const BurguerMenu = ({ color, onToggle }) => {

    const [isOpen, setIsOpen] = useState(false);

    const handleMenuToggle = () => {
        // Logic to determine if the menu is opened or closed
        onToggle(!isOpen); // Call the callback with the menu status
    }

    const setOpenedState = () => {
        setIsOpen(!isOpen);
        handleMenuToggle();
    }

    return(
        <>
            <div className={isOpen ? 'menu-button-open' : 'menu-button'} onClick={setOpenedState}>
                <div className={'menu-button-burguer ' + color} />
                <div className={'menu-button-burguer ' + color} />
                <div className={'menu-button-burguer ' + color} />
            </div>
            {isOpen && <div className='bg-circle'/>}
            {isOpen && <NavMenu className='nav-menu' />}
        </>
    )
}

export default BurguerMenu;