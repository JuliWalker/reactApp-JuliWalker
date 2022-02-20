import Carrito from '../Images/shopping-cartV2.jpg'
import { NavLink } from 'react-router-dom';
import { cartContext } from "./context/CartProvider";
import { useContext } from 'react';

export default function CartWidget() {

    const { sumTotalItems } = useContext(cartContext);

    return (
        <>
            <span className='withe mx-2'> {sumTotalItems()}</span>
            <NavLink to={'/cart'}> <img className="self-align-end chartSize" src={Carrito} alt="carrito de compra" /> </NavLink>
        </>
    )
}