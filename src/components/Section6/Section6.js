import React from 'react';
import Button from '../Button/Button';
import './Section6.scss';

const Section6 = () => {
    return(
        <section className='section-6'>
            <h1 className='section-6__title'>Instale já a <span>PortuGO</span></h1>
            <div className='section-6__main-div' id='test'>
                <div className='section-6__main-div__first-div'>
                    <div className='section-6__main-div__first-div__buttons-div'>
                        <Button 
                            styleType={'btn--style-2'} 
                            text={'Para motoristas'} 
                            icon={'images/ic-car.svg'}
                        />
                        <Button 
                            styleType={'btn--style-2'} 
                            text={'Para passageiros'} 
                            icon={'images/ic-passanger.svg'}
                        />
                    </div>
                    <img className='section-6__main-div__first-div__img' src='images/phone-in-hand-with-app.png' alt='Telemóvel com a app PortuGO a rodar' />
                </div>
            </div>
        </section>
    )
}

export default Section6;