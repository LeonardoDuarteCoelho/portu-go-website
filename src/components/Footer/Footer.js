import './Footer.scss';

const Footer = () => {
    return(
        <footer>
            <div className='footer__div-1'>
                <div className='footer__div-1__social-medias'>
                    <img src='images/ic-facebook-black-btn.svg' alt='Ícone do Facebook' />
                    <img src='images/ic-linked-in-black-btn.svg' alt='Ícone do LinkedIn' />
                    <img src='images/ic-instagram-black-btn.svg' alt='Ícone do Instagram' />
                    <img src='images/ic-x-twitter-black-btn.svg' alt='Ícone do Twitter' />
                    <img src='images/ic-discord-black-btn.svg' alt='Ícone do Discord' />
                </div>
                <div className='footer__div-1__navigation-map'>
                    <ul>
                        <li>PortuGO</li>
                        <li>Boas-vindas</li>
                        <li>Quem somos nós</li>
                        <li>Benefícios para condutores</li>
                        <li>Nossos resultados</li>
                        <li>Onde operamos</li>
                        <li>Instale nossa app</li>
                        <li>Contacte-nos</li>
                    </ul>
                    <ul>
                        <li>Utilizador</li>
                        <li>Iniciar sessão</li>
                        <li>Termos & Condições</li>
                        <li>Privacidade</li>
                        <li>Cookies</li>
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