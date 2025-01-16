import "./Products.css";
import Filters from "./Filters";
import ItemListContainer from "./ItemListContainer";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

const Products = (props) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const category = searchParams.get("category");

    return (
        <main className="products-main">
            <Filters />
            <div className="main-view">
                <div className="top-details">
                    <h1>Categorías</h1>
                    <div className="order">
                        <select defaultValue="Destacados">
                            <option value="Destacados">Destacados</option>
                            <option value="Ascendente">Menor a mayor</option>
                            <option value="Descendente">Mayor a menor</option>
                        </select>
                    </div>
                </div>
                <div className="product-list">
                    <ItemListContainer category={category} />
                </div>
            </div>
        </main>
    );
}

export default Products;