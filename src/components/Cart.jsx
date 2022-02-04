import react, { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { cartContext } from "./context/CartProvider";
import CartItem from "./CartItem";
import { BrowserRouter, Switch, Route, useParams, Link, NavLink } from 'react-router-dom';

export default function Cart() {

    const { cart, clearCart } = useContext(cartContext);

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
                    <button onClick={() => clearCart()} type="button" className="btn btn-danger my-4">Borrar todo</button>
                }
            </div>
        </>
    )

}