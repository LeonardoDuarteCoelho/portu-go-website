import './Header.scss';
import BurguerMenu from '../BurguerMenu/BurguerMenu.js';
import React, { useEffect, useRef, useState } from 'react';

const Header = () => {
    const headerRef = useRef();
    const [lastScrollY, setLastScrollY] = useState(window.scrollY);
    const [cumulativeUpScroll, setCumulativeUpScroll] = useState(0);
    const scrollThreshold = 70; // Amount of upward scroll needed for the header to appear
    const [logo, setLogo] = useState('./images/logo-portu-go-black.png');
    const [headerStyle, setHeaderStyle] = useState('header header-top');
    const [hamburguerColor, setHamburguerColor] = useState('menu-button-burguer--black');

    const handleScroll = () => {
        const currentScrollY = window.scrollY;

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
        setLastScrollY(currentScrollY);
    }
  
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
  
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [cumulativeUpScroll, lastScrollY])

    return (
        <header ref={headerRef} className={headerStyle}>
            <img src={logo} alt='Logo da PortuGO' />
            <BurguerMenu color={hamburguerColor} />
        </header>
    );
};

export default Header;