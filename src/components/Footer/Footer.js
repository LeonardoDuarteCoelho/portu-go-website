import React, { useState, useEffect } from 'react';
import './Footer.scss';

const Footer = () => {
    const [facebookIcon, setFacebookIcon] = useState('images/ic-facebook-black-btn.svg');
    const [linkedInIcon, setLinkedInIcon] = useState('images/ic-linked-in-black-btn.svg');
    const [instagramIcon, setInstagramIcon] = useState('images/ic-instagram-black-btn.svg');
    const [twitterIcon, setTwitterIcon] = useState('images/ic-x-twitter-black-btn.svg');
    const [discordIcon, setDiscordIcon] = useState('images/ic-discord-black-btn.svg');

    useEffect(() => {
        const handleIcons = () => {
            if (window.innerWidth > 768) {
                setFacebookIcon('images/ic-facebook-alt-btn.svg');
                setLinkedInIcon('images/ic-linked-in-alt-btn.svg');
                setInstagramIcon('images/ic-instagram-alt-btn.svg');
                setTwitterIcon('images/ic-x-twitter-alt-btn.svg');
                setDiscordIcon('images/ic-discord-alt-btn.svg');
            } else {
                // Set the icons for smaller screens if needed
                setFacebookIcon('images/ic-facebook-black-btn.svg');
                setLinkedInIcon('images/ic-linked-in-black-btn.svg');
                setInstagramIcon('images/ic-instagram-black-btn.svg');
                setTwitterIcon('images/ic-x-twitter-black-btn.svg');
                setDiscordIcon('images/ic-discord-black-btn.svg');
            }
        };

        // Add event listener
        window.addEventListener('resize', handleIcons);

        // Call the resize handler initially to set the correct icons
        handleIcons();

        // Cleanup the event listener
        return () => window.removeEventListener('resize', handleIcons);
    }, []);

    return(
        <footer>
            <div className='footer__div-1'>
                <div className='footer__div-1__social-medias'>
                    <a href='.'><img src={facebookIcon} alt='Ícone do Facebook' /></a>
                    <a href='.'><img src={linkedInIcon} alt='Ícone do LinkedIn' /></a>
                    <a href='.'><img src={instagramIcon} alt='Ícone do Instagram' /></a>
                    <a href='.'><img src={twitterIcon} alt='Ícone do Twitter' /></a>
                    <a href='.'><img src={discordIcon} alt='Ícone do Discord' /></a>
                </div>
                <div className='footer__div-1__navigation-map'>
                    <ul>
                        <li>PortuGO</li>
                        <li><a href='.'>Boas-vindas</a></li>
                        <li><a href='.'>Quem somos nós</a></li>
                        <li><a href='.'>Benefícios para condutores</a></li>
                        <li><a href='.'>Nossos resultados</a></li>
                        <li><a href='.'>Onde operamos</a></li>
                        <li><a href='.'>Instale nossa app</a></li>
                        <li><a href='.'>Contacte-nos</a></li>
                    </ul>
                    <ul>
                        <li>Utilizador</li>
                        <li><a href='.'>Iniciar sessão</a></li>
                        <li><a href='.'>Termos & Condições</a></li>
                        <li><a href='.'>Privacidade</a></li>
                        <li><a href='.'>Cookies</a></li>
                    </ul>
                </div>
                <div className='footer__div-1__btn-container'>
                    <a href="https://www.apple.com/app-store/">
                        <img src="./images/vecteezy_app-store-download-button-in-black-colors-download-on-the_12871375_299.png" alt="Botão para a App Store"/>
                    </a>
                    <a href="https://play.google.com/store/games?hl=en&gl=US&pli=1">
                        <img src="./images/vecteezy_google-play-store-download-button-in-black-colors-download_12871365_180.png" alt="Botão para a Play Store"/>
                    </a>
                </div>
            </div>
            <div className='footer__div-2'>
                <div className='footer__div-2__logos-container'>
                    <img src='images/logo-portu-go-black.png' alt='Logo da PortuGO' />
                    <img src='images/logo-blue-topper-technologies-black.png' alt='Logo da Blue Topper Technologies' />
                </div>
                <div className='footer__div-2__copyright-text'>
                    <p>Copyright © 2023 Leonardo Coelho</p>
                    <p>Todos os direitos reservados</p>
                </div>
                <img className='footer__div-2__copyright-img' src='images/cc_by-nc-nd.svg.png' alt='Creative Commons: BY/NC/ND' />
            </div>
        </footer>
    )
}

export default Footer;