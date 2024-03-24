import { useState } from 'react';
import './Section7.scss';
import Button from '../Button/Button';
import { database } from '../../config/firebase'; 
import { ref, push } from 'firebase/database';

const Section7 = ({ title }) => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email) && email.length <= 256;
    }
      

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validating name:
        if (!formData.fullName || formData.fullName.length < 5) {
            return alert('O nome não pode ser muito curto. Escreva seu nome completo.');
        }
        // Validating email:
        if (!validateEmail(formData.email)) {
            return alert('O email inserido não é válido.');
        }

        const messagesRef = ref(database, 'websiteMessages');
        const newMessage = {
            ...formData,
            timeOfMessage: new Date().toISOString(),
        };
        push(messagesRef, newMessage).then(() => {
            alert('Mensagem enviada com sucesso!'); // User feedback
            setFormData({ // Reset form fields
                fullName: '',
                email: '',
                subject: '',
                message: '',
            });
            // Handle successful submission
        }).catch((error) => {
            console.error('Error saving data: ', error);
            alert('Houve um erro ao enviar a mensagem. Tente novamente.'); // User feedback for errors
            // Handle any errors
        });

        // Note: It's good practice to provide feedback to the user upon successful submission 
        // or inform them of errors. The .then() and .catch() methods are perfect for this.
    }

    return(
        <section className='section-7'>
            <form className='section-7__form' onSubmit={handleSubmit}>
                <h1 className='section-7__title'>{title}</h1>
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
                    styleType={'btn--style-1'} 
                    text={'Enviar'} 
                />
            </form>
        </section>
    )
}

export default Section7;