import "./ItemListContainer.css";
import Item from "./Item";
import productsList from "../productsList.json";

const ItemListContainer = (props) => {

    return(
        <>
            {productsList.map(product => {
                if (props.category === null || props.category === undefined || props.category === product.category) {
                    return(<Item key={product.id} itemName={product.name} itemImg={product.img} itemPrice={product.price} addToCart={props.addToCart} />);
                }
            })}
        </>
    )
}

export default ItemListContainer;