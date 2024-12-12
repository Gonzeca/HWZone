import "./ItemListContainer.css";
import add_cart from "../media/add_cart.svg";

const ItemListContainer = (props) => {
    const cpu = require("../media/AMD-RYZEN-5700G.jpg");
    const mother = require("../media/ASUS-PRIME-A520M-K.jpg");
    const gpu = require("../media/NVIDIA-RTX-3070.jpg");
    const ram = require("../media/KINGSTON-FURY-BEAST-WHITE.jpg");

    return(
        <main>
            <h1>{props.client}, descubrí nuestros productos destacados</h1>
            <div className="carousel">
                <section>
                    <div className="product-top">
                        <img className="product-img" src={cpu} />
                        <div className="product-detail">
                            <span>AMD RYZEN 5700G</span>
                        </div>
                    </div>
                    <div className="product-bottom">
                        <span className="price">$158.399</span>
                        <button>
                            <img className="add-cart" src={add_cart} />
                        </button>
                    </div>
                </section>
                <section>
                    <div className="product-top">
                        <img className="product-img" src={mother} />
                        <div className="product-detail">
                            <span>ASUS PRIME A520M-K</span>
                        </div>
                    </div>
                    <div className="product-bottom">
                        <span className="price">$75.999</span>
                        <button>
                            <img className="add-cart" src={add_cart} />
                        </button>
                    </div>
                </section>
                <section>
                    <div className="product-top">
                        <img className="product-img" src={gpu} />
                        <div className="product-detail">
                            <span>NVIDIA RTX 3070</span>                        
                        </div>
                    </div>
                    <div className="product-bottom">
                        <span className="price">$679.999</span>
                        <button>
                            <img className="add-cart" src={add_cart} />
                        </button>
                    </div>
                </section>
                <section>
                    <div className="product-top">
                        <img className="product-img" src={ram} />
                        <div className="product-detail">
                            <span>MEMORIA RAM 8GB DDR4 3200MHz KINGSTON FURY BEAST WHITE</span>
                        </div>
                    </div>
                    <div className="product-bottom">
                        <span className="price">$38.299</span>
                        <button>
                            <img className="add-cart" src={add_cart} />
                        </button>
                    </div>
                </section>             
            </div>
        </main>
    )
}

export default ItemListContainer;