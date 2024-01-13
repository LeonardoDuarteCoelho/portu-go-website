import './Header.scss';
import BurguerMenu from '../BurguerMenu/BurguerMenu.js';
import React, { useEffect, useRef, useState } from 'react';
import Button from '../Button/Button.js';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Check if the burguer menu is open or closed
    const headerRef = useRef();
    const [lastScrollY, setLastScrollY] = useState(window.scrollY);
    const [cumulativeUpScroll, setCumulativeUpScroll] = useState(0);
    const scrollThreshold = 70; // Amount of upward scroll needed for the header to appear
    const [logo, setLogo] = useState('./images/logo-portu-go-black.png');
    const [headerStyle, setHeaderStyle] = useState('header header-top');
    const [hamburguerColor, setHamburguerColor] = useState('menu-button-burguer--black');
    
    const toggleBodyScroll = (shouldScroll) => {
        if (shouldScroll) {
            document.body.style.overflow = 'visible'; // Re-enable scrolling
        } else {
            document.body.style.overflow = 'hidden'; // Disable scrolling
        }
    };

    const toggleMenu = (isOpen) => {
        setIsMenuOpen(isOpen); // Callback to update the menu state
        toggleBodyScroll(!isOpen); // Disable scrolling when menu is open, enable when closed
    }

    const handleScroll = () => {
        const currentScrollY = window.scrollY;

        // Only enables the responsive scrolling when navigation menu is off
        if (!isMenuOpen) { 
            if (currentScrollY > lastScrollY) {
                // Scrolling down
                headerRef.current.style.top = `-${headerRef.current.offsetHeight}px`;
                setCumulativeUpScroll(0); // Reset cumulative upward scroll
                setLogo('./images/logo-portu-go-white.png');
                setHeaderStyle('header header-scrolling');
                setHamburguerColor('menu-button-burguer--white');
            } else if(currentScrollY <= 0) {
                setLogo('./images/logo-portu-go-black.png');
                setHeaderStyle('header header-top');
                setHamburguerColor('menu-button-burguer--black');
            } else {
                // Scrolling up
                const upScroll = lastScrollY - currentScrollY;
                setCumulativeUpScroll(prev => prev + upScroll);
                if (cumulativeUpScroll > scrollThreshold) {
                    headerRef.current.style.top = '0px';
                }
            }
        }
        setLastScrollY(currentScrollY);
    }
  
    useEffect(() => {
            window.addEventListener('scroll', handleScroll, { passive: true });
    
            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
    },  [cumulativeUpScroll, lastScrollY, isMenuOpen])

    return (
        <header className={headerStyle} ref={headerRef}>
            <img className='header__logo' src={logo} alt='Logo da PortuGO' />
            <div className='header__btns-container'>
                <Button styleType={'btn--style-2'} text={'Inscreva-se'} icon={''}/>
                <BurguerMenu className='header__btns-container__burguer-menu' color={hamburguerColor} onToggle={toggleMenu} />
            </div>
        </header>
    );
};

export default Header;