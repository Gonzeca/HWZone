import "./NavBar.css";
import CartWidget from './CartWidget';

const NavBar = () => {
    const logo = require('../media/hwzone_logo.png');

    return(
        <header>
            <img className='' src={logo}></img>
            <div className='navigator'>
                <a href='#'><nav>Productos</nav></a>
                <a href='#'><nav>Armar PC</nav></a>
                <a href='#'><nav>Soporte</nav></a>
            </div>
            <CartWidget />
        </header>
    );
}

export default NavBar;