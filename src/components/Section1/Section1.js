import './Section1.scss';
import React from 'react';

const Section1 = ({ title }) => {
    return(
        <section className="section-1">
            <h1 className='section-1__title'>
                {title}
            </h1>
            <p className='section-1__text'>
                <span>PortuGO</span> é uma aplicação de transporte urbano adaptada para suas necessidades. 
                Basta pedir um veículo em nossa app, que enviaremos um motorista bem-avaliado para atender ao seu chamado. 
            </p>
            <div className='section-1__btn-container'>
                <a href="https://www.apple.com/app-store/">
                    <img src="./images/vecteezy_app-store-download-button-in-white-colors-download-on-the_12871374_558.png" alt="Botão para a App Store"/>
                </a>
                <a href="https://play.google.com/store/games?hl=en&gl=US&pli=1">
                    <img src="./images/vecteezy_google-play-store-download-button-in-white-colors-download_12871364_282.png" alt="Botão para a Play Store"/>
                </a>
            </div>
        </section>  
    )
}

export default Section1;