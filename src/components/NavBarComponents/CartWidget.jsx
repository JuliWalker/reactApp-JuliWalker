import Carrito from '../../Images/shopping-cartV2.jpg'
import { NavLink } from 'react-router-dom';
import { cartContext } from "../context/CartProvider";
import { useEffect, useContext, useState } from 'react';

export default function NavBar() {
    
    const { sumTotalItems, cart } = useContext(cartContext);

    const [cartItems, setCartItems] = useState(0);

    useEffect(() => {
        setCartItems(sumTotalItems());
}, [cart])

    return (
        <>
        <span className='withe mx-2'> {cartItems}</span>
        <NavLink to={'/cart'}> <img className="self-align-end chartSize" src={Carrito} alt="carrito de compra"/> </NavLink>
        </>
    )
}