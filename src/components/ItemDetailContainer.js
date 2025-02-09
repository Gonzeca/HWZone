import { useEffect, useState } from "react";
import productsList from "../productsList.json";
import AddCart from "./AddCart";
const { useParams } = require("react-router")

const ItemDetailContainer = (props) => {
    console.log(useParams());
    const { id } = useParams();
    const [idData, setIdData] = useState(null);
    
    useEffect(() => {
        console.log("Received id:", id);

        return () => {
            console.log("Will change id:", id);
        }
    }, [id])

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