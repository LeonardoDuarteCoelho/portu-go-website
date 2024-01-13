import './Section4.scss';

const Section4 = ({ title }) => {

    return(
        <section className='section-4'>
            <h1 className='section-4__title'>{title}</h1>
            <div className='section-4__achivements'>
                <div className='section-4__achivements__achivement'>
                    <img className='section-4__achivements__achivement__icon' src='images/ic-achivement-1.svg' alt='Ícone de transferência' />
                    <h5 className='section-4__achivements__achivement__title'>300 mil</h5>
                    <h6 className='section-4__achivements__achivement__text'>dispositivos com nossa app</h6>
                </div>
                <div className='section-4__achivements__achivement'>
                    <img className='section-4__achivements__achivement__icon' src='images/ic-achivement-2.svg' alt='Ícone de um veículo' />
                    <h5 className='section-4__achivements__achivement__title'>1 milhão</h5>
                    <h6 className='section-4__achivements__achivement__text'>corridas concluídas</h6>
                </div>
                <div className='section-4__achivements__achivement'>
                    <img className='section-4__achivements__achivement__icon' src='images/ic-achivement-3.svg' alt='Ícone de estrela' />
                    <h5 className='section-4__achivements__achivement__title'>5/5</h5>
                    <h6 className='section-4__achivements__achivement__text'>nas avaliações da Google Play</h6>
                </div>
            </div>
            <img className='section-4__img' src='images/pexels-andrea-piacquadio-bg-transparent.png' alt='Cliente a utilizar a aplicação' />
        </section>
    )
}

export default Section4;