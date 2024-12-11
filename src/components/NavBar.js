import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { byPrefixAndName } from '@awesome.me/kit-KIT_CODE/icons'

const NavBar = () => {
    const logo = require('../media/hwzone_logo.png');
    const fai = (icon) => <FontAwesomeIcon icon={byPrefixAndName.fas[icon]} />

    return(
        <header>
            <img className='' src={logo}></img>
            <nav><a href='#'>Productos</a></nav>
            <nav><a href='#'>Productos</a></nav>
            <nav><a href='#'>Soporte</a></nav>
            <nav>{fai('fa-shopping-cart')}</nav>
        </header>
    );
}

export default NavBar;