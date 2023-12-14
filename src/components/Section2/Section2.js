import './Section2.scss';

const Section2 = ({title, imgSrc, imgName}) => {

    return(
        <section className="section-2">
            <h1>{title}</h1>
            <p>Na PortuGO, somos pioneiros da inovação em mobilidade urbana, dedicados a redefinir as vias do transporte moderno em Portugal. 
            Nossa missão é oferecer uma alternativa de transporte segura, acessível e de alta qualidade que se adapte às necessidades 
            dinâmicas dos passageiros do século XXI.</p>
            <p>Com uma frota de veículos modernos e uma interface de aplicativo intuitiva, garantimos um serviço eficiente e confortável 
            para cada viagem.</p>
            <img src={imgSrc} alt={imgName} />
        </section>
    )
}

export default Section2;