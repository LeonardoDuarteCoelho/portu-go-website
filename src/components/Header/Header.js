import './Header.scss';
import BurguerMenu from '../BurguerMenu/BurguerMenu.js';

const Header = () => {
    return(
        <section className="header">
            <img src="./images/logo-portu-go-black.png" alt="Logo da PortuGO" />
            <BurguerMenu />
        </section>
    )
}

export default Header;