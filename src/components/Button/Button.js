import './Button.scss';

const Button = ({ styleType, text, icon }) => {
    return(
        <button className={`btn ${styleType}`}>
            {icon && <img className='btn__icon' src={icon} />}
            <p className='btn__text'>{text}</p>
        </button>
    )
}

export default Button;