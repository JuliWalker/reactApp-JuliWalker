import { useContext } from "react";
import { cartContext } from "./context/CartProvider";
import CartItem from "./CartItem";
import { NavLink } from 'react-router-dom';

export default function Cart() {

    const { cart, clearCart, sumTotal } = useContext(cartContext);

    return (
        <>
            <div className="container-md my-5 text-center">
                <div className="row justify-content-evenly">
                    {cart.map(item => <CartItem key={item.product.id} producto={item.product} cantidad={item.cantidad} />)}
                </div>
                {cart.length === 0 ?
                    <div>
                        <p>Empty cart</p>
                        <NavLink to={'/items/all'}>Go to shop</NavLink>
                    </div>
                    :
                    <div>
                        <h4 className="mt-5">Valor de tu compra: {sumTotal()} </h4>
                        <NavLink className="btn btn-success m-4" to='/TerminarCompra'>Completar compra</NavLink>
                        <button onClick={() => clearCart()} type="button" className="btn btn-danger m-4">Borrar todo</button>
                    </div>
                }
            </div>
        </>
    )

}