import './Section5.scss';
import PortugalMap from '../PortugalMap/PortugalMap';

const Section5 = ({ title }) => {
    return(
        <section className='section-5'>
            <h1 className='section-5__title'>{title}</h1>
            <div className='section-5__div'>
                <PortugalMap className='section-5__div__img' />
                <p className='section-5__div__text'>
                    Nossos serviços cobrem as principais cidades em todas as regiões de Portugal. 
                    Seja nos agitados centros urbanos ou nas cidades mais interioranas do país, 
                    a PortuGO está aqui para levá-lo onde você precisa, quando você precisa.
                </p>
            </div>
        </section>
    )
}

export default Section5;