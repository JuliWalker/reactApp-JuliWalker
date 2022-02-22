import { useEffect } from "react"
import { useContext } from "react";
import { cartContext } from "./context/CartProvider";
import { NavLink } from 'react-router-dom';

export default function CompraFinalizada(idCompra) {

    const { clearCart } = useContext(cartContext);

    useEffect(() => {
        clearCart();
    }, []);

    return (
        <>
            <div className="center my-5">
                <h2 className="center my-5"> Gracias por tu compra! </h2>
                <h3 className="center my-5"> Tu número de orden es: {idCompra.idCompra} </h3>
                <h4 className="center my-5"> Te enviaremos un e-mail con los datos del envío </h4>
                <NavLink className="my-5" to={'/items/all'}><h4>Haz click aqui para volver a la tienda</h4></NavLink>
            </div>
        </>
    )
}