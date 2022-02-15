import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { cartContext } from "./context/CartProvider";
import CartItem from "./CartItem";
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export default function Cart() {

    const { cart, clearCart, sumTotal } = useContext(cartContext);

    const [cartPrice, setCartPrice] = useState(0);

    useEffect(() => {
            setCartPrice(sumTotal());
    }, [cart])

    return (
        <>
            <div className="container-md my-5 text-center">
                <div className="row justify-content-evenly">
                    {cart.map(item => <CartItem key={item.product.id} producto={item.product} cantidad={item.cantidad} />)}
                </div>
                {cart.length === 0 ?
                    <div>
                        <p>Empty cart</p>
                        <Link to={'/items/all'}>Go to shop</Link>
                    </div>
                    :
                    <div>
                        <p className="mt-5">Cart price: {cartPrice} </p>
                        <NavLink className="btn btn-success m-4" to='/TerminarCompra'>Finalizar compra</NavLink>
                        <button onClick={() => clearCart()} type="button" className="btn btn-danger m-4">Borrar todo</button>
                    </div>
                }
            </div>
        </>
    )

}