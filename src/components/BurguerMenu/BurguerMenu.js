import { useState } from 'react';
import './BurguerMenu.scss';

const BurguerMenu = ({ color }) => {

    const [isOpen, setIsOpen] = useState(false);

    const setOpenedState = () => {
        let reverseOpened = isOpen;
        setIsOpen(!reverseOpened);
    }

    return(
        <div className={isOpen ? 'menu-button-open' : 'menu-button'} onClick={() => setOpenedState()}>
            <div className={'menu-button-burguer ' + color} />
            <div className={'menu-button-burguer ' + color} />
            <div className={'menu-button-burguer ' + color} />
        </div>
    )
}

export default BurguerMenu;