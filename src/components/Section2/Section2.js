import React from 'react';
import Button from '../Button/Button.js'
import './Section2.scss';

const Section2 = ({title, imgSrc, imgName}) => {

    return(
        <section className="section-2">
            <div className='section-2__texts'>
                <h1 className='section-2__texts__title'>{title}</h1>
                <p className='section-2__texts__text'>
                    Na PortuGO, somos pioneiros da inovação em mobilidade urbana, 
                    dedicados a redefinir as vias do transporte moderno em Portugal. 
                    Nossa missão é oferecer uma alternativa de transporte segura, 
                    acessível e de alta qualidade que se adapte às necessidades 
                    dinâmicas dos passageiros do século XXI.
                </p>
                <p className='section-2__texts__text'>
                    Com uma frota de veículos modernos e uma interface de aplicativo intuitiva, 
                    garantimos um serviço eficiente e confortável para cada viagem.
                </p>
                <Button styleType={'btn--style-1'} text={'Saiba mais'} icon={''} />
            </div>
            <img className='section-2__img' src={imgSrc} alt={imgName} />
        </section>
    )
}

export default Section2;