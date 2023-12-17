import './Section4.scss';

const Section4 = ({ title }) => {

    return(
        <section className='section-4'>
            <h1 className='section-4__title'>{title}</h1>
            <div className='section-4__achivements'>
                <div className='section-4__achivements__achivement'>
                    <img src='images/ic-achivement-1.svg' alt='Ícone de transferência' />
                    <h5>300 mil</h5>
                    <h6>dispositivos com nossa app</h6>
                </div>
                <div className='section-4__achivements__achivement'>
                    <img src='images/ic-achivement-2.svg' alt='Ícone de um veículo' />
                    <h5>1 milhão</h5>
                    <h6>corridas concluídas</h6>
                </div>
                <div className='section-4__achivements__achivement'>
                    <img src='images/ic-achivement-3.svg' alt='Ícone de estrela' />
                    <h5>5/5</h5>
                    <h6>nas avaliações da Google Play</h6>
                </div>
            </div>
            <img className='section-4__img' src='images/pexels-andrea-piacquadio-bg-transparent.png' alt='Cliente a utilizar a aplicação' />
        </section>
    )
}

export default Section4;