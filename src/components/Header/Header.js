import './Header.scss';
import BurguerMenu from '../BurguerMenu/BurguerMenu.js';

const Header = () => {
    return(
        <header>
            <img src="./images/logo-portu-go-black.png" alt="Logo da PortuGO" />
            <BurguerMenu />
        </header>
    )
}

export default Header;