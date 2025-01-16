import './Filters.css';
import { Link } from 'react-router-dom';

const Filters = () => {
    return (
        <aside>
            <h3>Categorías</h3>
            <ul>
                <Link to="/products?category=cpu">
                    <li>
                        Procesadores
                    </li>
                </Link>
                <Link to="/products?category=motherboard">
                    <li>
                        Motherboards
                    </li>
                </Link>
                <Link to="/products?category=ram">
                    <li>
                        Memorias RAM
                    </li>
                </Link>
                <Link to="/products?category=gpu">
                    <li>
                        Gráficas
                    </li>
                </Link>
            </ul>
        </aside>
    );
}

export default Filters;