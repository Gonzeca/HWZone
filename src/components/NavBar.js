

const NavBar = () => {
    const logo = require('../media/hwzone_logo.png');

    return(
        <header>
            <img className='' src={logo}></img>
            <nav><a href='#'>Productos</a></nav>
            <nav><a href='#'>Productos</a></nav>
            <nav><a href='#'>Soporte</a></nav>
        </header>
    );
}

export default NavBar;