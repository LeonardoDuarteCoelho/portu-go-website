import './Section3.scss';

const Section3 = ({ title }) => {
    return(
        <section className='section-3'>
            <h1 className='section-3__title'>{title}</h1>
            <div className="section-3__benefits">
                <div className="section-3__benefits__benefit">
                    <img className="section-3__benefits__benefit__img" src='images/ic-calendar-clock.svg' alt='Ícone de calendário' />
                    <div className="section-3__benefits__benefit__texts">
                        <h2 className="section-3__benefits__benefit__texts__title">Decida sua jornada</h2>
                        <p className="section-3__benefits__benefit__texts__text">
                            És livre para decidir seu horário de trabalho. Seja pela manhã, tarde ou noite, 
                            deixamos que você tenha autonomia completa para conduzir em nossa app a qualquer hora.
                        </p>
                    </div>
                </div>
                <div className="section-3__benefits__benefit">
                    <img className="section-3__benefits__benefit__img" src='images/ic-payments.svg' alt='Ícone de dinheiro' />
                    <div className="section-3__benefits__benefit__texts">
                        <h2 className="section-3__benefits__benefit__texts__title">Ganhe por viagem</h2>
                        <p className="section-3__benefits__benefit__texts__text">
                            Nossos motoristas são pagos a cada viagem realizada — e não no final de mês. 
                            Nossa app também possui um sistema de gorjeta, que permite passageiros concederem 
                            um bônus aos motoristas.
                        </p>
                    </div>
                </div>
                <div className="section-3__benefits__benefit">
                    <img className="section-3__benefits__benefit__img" src='images/ic_partner_exchange.svg'  alt='Ícone de colaboração' />
                    <div className="section-3__benefits__benefit__texts">
                        <h2 className="section-3__benefits__benefit__texts__title">Parceiros dos trabalhadores</h2>
                        <p className="section-3__benefits__benefit__texts__text">
                            Acreditamos numa troca justa entre nossas frotas e a nossa companhia. 
                            Somos reconhecidos como a melhor app de transporte urbano para motoristas em toda Portugal. 
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section3;