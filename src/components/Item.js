import { Link, useParams } from "react-router";
import AddCart from "./AddCart"

const Item = (props) => {
    const {id} = useParams();
    console.log(id);
    return(
        <Link to="/item/:id">
            <section>
                <div className="product-top">
                    <img className="product-img" src={require("../media/" + props.itemImg)} />
                    <div className="product-detail">
                        <span>{props.itemName}</span>
                    </div>
                </div>
                <div className="product-bottom">
                    <span className="price">${props.itemPrice}</span>
                    <AddCart addToCart={props.addToCart}/>
                </div>
            </section>
        </Link>
    )
}

export default Item;