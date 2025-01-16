import "./NavBar.css";
import CartWidget from './CartWidget';
import { Link } from "react-router-dom";

const NavBar = (props) => {
    const logo = require('../media/hwzone_logo.png');

    return(
        <header>
            <Link to="/"> <img className='' src={logo}></img> </Link>
            <div className='navigator'>
                <Link to="/products">Productos</Link>
                <Link to="/products">Armar PC</Link>
                <Link to="/products">Soporte</Link>
            </div>
            <CartWidget cartItems={props.cartItems > 9 ? "9+" : props.cartItems}/>
        </header>
    );
}

export default NavBar;