import React from 'react';
import './Section5.scss';
import PortugalMap from '../PortugalMap/PortugalMap';

const Section5 = ({ title }) => {
    return(
        <section className='section-5'>
            <h1 className='section-5__title'>{title}</h1>
            <div className='section-5__div'>
                <PortugalMap className='section-5__div__img' />
                <div className='section-5__div__texts'>
                    <p className='section-5__div__texts__text'>
                        Nossos serviços cobrem as principais cidades em todas as regiões de Portugal. 
                        Seja nos agitados centros urbanos ou nas cidades mais interioranas do país, 
                        a PortuGO está aqui para levá-lo onde você precisa, quando você precisa.
                    </p>
                    <p className='section-5__div__texts__text'>
                        A nossa rede de motoristas está distribuída conforme  demonstra o mapa ao lado. 
                        Estamos numa constante expansão das nossas operações, onde miramos em tornar o 
                        transporte urbano em Portugal acessível aos clientes e justo aos motoristas. 
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Section5;