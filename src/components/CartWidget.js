import "./CartWidget.css";
import cart from "../media/cart.svg"

const CartWidget = () => {
    return (
        <div className="cart-box">
            <a href="#">
                <img src={cart} />
            </a>
            <div className="cart-counter-box">
                <span className="cart-counter">1</span>
            </div>
        </div>
    )
}

export default CartWidget;