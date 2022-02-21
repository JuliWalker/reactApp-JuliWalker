import { useState } from "react";

export default function ItemCount({ onAdd, inicial, stock }) {

    const [cantidad, setCantidad] = useState(inicial);

    function sumar() {
        let aux = cantidad
        if (aux < stock) {
            setCantidad(aux + 1)
        } else {
            alert("no tenemos mas stock de ese producto")
        }
    }

    function restar() {
        let aux = cantidad;
        if (aux > 1) {
            setCantidad(cantidad - 1)
        }
    }

    return (
        <>
            <button type="button" className="btn btn-primary btn-sm" onClick={() => restar()}> - </button>
            <span>  {cantidad}  </span>
            <button type="button" className="btn btn-primary btn-sm" onClick={() => sumar()}> + </button>
            <br />
            <button onClick={() => onAdd(cantidad)} type="button" className="btn btn-primary my-3">Agregar al carrito</button>
        </>
    )

}