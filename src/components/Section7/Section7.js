import { useState } from 'react';
import './Section7.scss';
import Button from '../Button/Button';

const Section7 = ({ title }) => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Sending data to a server. Work in progress
        console.log(formData);
    }

    return(
        <section className='section-7'>
            <h1 className='section-7__title'>{title}</h1>
            <form className='section-7__form' onSubmit={handleSubmit}>
                <label className='section-7__form__label' htmlFor='section-7__form__contact-type'>
                    Qual é a natureza do seu contacto?
                </label>
                <select id='section-7__form__contact-type' name='contact-type' onChange={handleChange}>
                    <option value='userFeedback'>Avaliação de utilizador</option>
                    <option value='comercial'>Comercial</option>
                    <option value='lawful'>Jurídico</option>
                </select>
                <label className='section-7__form__label'>
                    Preencha o formulário:
                </label>
                <input 
                    type='text'
                    name='fullName'
                    placeholder='Primeiro e último nome'
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Endereço de email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="subject"
                    placeholder="Assunto"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="message"
                    placeholder="Digite sua mensagem..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea>
                <Button 
                    type="submit"
                    styleType={'btn--style-4'} 
                    text={'Enviar'} 
                />
            </form>
        </section>
    )
}

export default Section7;