import "./Featured.css";
import ItemListContainer from "./ItemListContainer";

const Featured = (props) => {
    return (
        <main>
            <h1>{props.client}, descubrí nuestros productos destacados</h1>
            <div className="carousel">
                <ItemListContainer />
            </div>
        </main>
    );
}

export default Featured;