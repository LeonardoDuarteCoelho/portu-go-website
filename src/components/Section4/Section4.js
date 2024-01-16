import './Section4.scss';

const Section4 = ({ title }) => {

    return(
        <>
            <h1 className='section-4__title'>{title}</h1>
            <section className='section-4'>
                <div className='section-4__achivements'>
                    <div className='section-4__achivements__achivement'>
                        <img className='section-4__achivements__achivement__icon' src='images/ic-achivement-1.svg' alt='Ícone de transferência' />
                        <div className='section-4__achivements__achivement__texts'>
                            <h5 className='section-4__achivements__achivement__texts__title'>300 mil</h5>
                            <h6 className='section-4__achivements__achivement__texts__text'>dispositivos com nossa app</h6>
                        </div>
                    </div>
                    <div className='section-4__achivements__achivement'>
                        <img className='section-4__achivements__achivement__icon' src='images/ic-achivement-2.svg' alt='Ícone de um veículo' />
                        <div className='section-4__achivements__achivement__texts'>
                            <h5 className='section-4__achivements__achivement__texts__title'>1 milhão</h5>
                            <h6 className='section-4__achivements__achivement__texts__text'>corridas concluídas</h6>
                        </div>
                    </div>
                    <div className='section-4__achivements__achivement'>
                        <img className='section-4__achivements__achivement__icon' src='images/ic-achivement-3.svg' alt='Ícone de estrela' />
                        <div className='section-4__achivements__achivement__texts'>
                            <h5 className='section-4__achivements__achivement__texts__title'>5/5</h5>
                            <h6 className='section-4__achivements__achivement__texts__text'>nas avaliações da Google Play</h6>
                        </div>
                    </div>
                </div>
                <img className='section-4__img' src='images/pexels-andrea-piacquadio-bg-transparent.png' alt='Cliente a utilizar a aplicação' />
            </section>
        </>

    )
}

export default Section4;