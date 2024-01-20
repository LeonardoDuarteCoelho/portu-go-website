import './Button.scss';

const Button = ({ styleType, text, icon, link }) => {
    return(
        <button href={link} className={`btn ${styleType}`}>
            {icon && <img className='btn__icon' src={icon} alt='Ícone do botão'/>}
            <p className='btn__text'>{text}</p>
        </button>
    )
}

export default Button;