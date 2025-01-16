import add_cart from "../media/add_cart.svg";

const AddCart = (props) => {
    return(
        <button onClick={props.addToCart}>
            <img className="add-cart" src={add_cart} />
        </button>
    );
}

export default AddCart;