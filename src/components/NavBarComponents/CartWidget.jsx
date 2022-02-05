import Carrito from '../../Images/shopping-cartV2.jpg'
import { NavLink } from 'react-router-dom';

export default function NavBar() {
    
    return (
        <NavLink to={'/cart'}> <img className="self-align-end chartSize" src={Carrito} alt="carrito de compra"/> </NavLink>
    )

}