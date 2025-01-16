import productsList from "../productsList.json";
import AddCart from "./AddCart";
const { useParams } = require("react-router")

const ItemDetailContainer = (props) => {
    const {id} = useParams();
    console.log(id);

    return(
        <main>
            <div className="principal">
                {/* <img href={require("../media/" + productsList[id-1].img)}></img>
                <div className="principal-details">
                    <h1>{productsList[id-1].name}</h1>
                    <span className="price">${productsList[id-1].itemPrice}</span>
                    <AddCart addToCart={props.addToCart}/>
                </div> */}
            </div>
        </main>
    )
}

export default ItemDetailContainer