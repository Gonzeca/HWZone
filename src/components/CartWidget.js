import "./CartWidget.css";
import cart from "../media/cart.svg"

const CartWidget = (props) => {
    return (
        <div className="cart-box">
            <a href="#">
                <img src={cart} />
            </a>
            <div className="cart-counter-box">
                <span className="cart-counter">{props.cartItems}</span>
            </div>
        </div>
    )
}

export default CartWidget;