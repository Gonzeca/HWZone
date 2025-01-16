import "./HWZone.css";
import NavBar from "./components/NavBar";
import Featured from "./components/Featured";
import Products from "./components/Products";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";

const HWZone = () => {
    const [cartItems, setCartItems] = useState(0);
    const addToCart = () => {
        setCartItems(cartItems + 1);
    }

    return(
        <>
            <BrowserRouter>
                <NavBar cartItems={cartItems}/>
                

                <Routes>
                    <Route path="/" element={<Featured client="Nombre" addToCart={addToCart}/>} />
                    <Route path="/HWZone" element={<Featured client="Nombre" addToCart={addToCart}/>} />
                    <Route path="/products" element={<Products/>} />
                    <Route path="/item/:id" element={<ItemDetailContainer />} />
                    <Route path="*" element={<h1>Error 404</h1>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default HWZone;