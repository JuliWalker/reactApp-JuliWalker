import CartWidget from './NavBarComponents/CartWidget'
import { NavLink } from 'react-router-dom';
import { cartContext } from "./context/CartProvider";
import { useEffect, useContext, useState } from 'react';

export default function NavBar() {

    const { cart } = useContext(cartContext);
    const [showCart, setShowCart] = useState(false);

    useEffect(() => {
        (cart.length === 0) ? setShowCart(false) : setShowCart(true);
    }, [cart])

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to={'/items/all'}>Juli Walker React proyect</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" to={'/items/remeras'}>Remeras</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={'/items/pantalones'}>Pantalones</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={'/items/gorras'}>Gorras</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={'/items/medias'}>Medias</NavLink>
                            </li>
                        </ul>
                    </div>
                    {showCart ?
                        <CartWidget />
                        :
                        <div className='displayNone'>
                        </div>
                        // ESTO DE ACA ESTA MAL, NO ME ACUERDO COMO HACER LA SINTACTIC SUGAR CON SOLO CONDICION DE SI
                    }
                </div>
            </nav>
        </>
    )

}