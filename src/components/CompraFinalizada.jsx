import { useEffect } from "react"
import { useContext } from "react";
import { cartContext } from "./context/CartProvider";

export default function CompraFinalizada(idCompra) {

    const { clearCart } = useContext(cartContext);  

    useEffect(() => {
            clearCart();
        }, []);

    return (
        <>
            <h2 className="center my-5"> Felicitaciones tu order es {idCompra.idCompra} </h2>
        </>
    )
}