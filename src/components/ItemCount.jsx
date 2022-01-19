import { Alert } from "bootstrap";
import react from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function ItemCount({ CantMax, CantIni }) {

    const [cantidad, setCantidad] = useState(CantIni);

    function sumar() {
        let aux = cantidad
        if (aux < CantMax) {
            setCantidad(aux + 1)
        } else {
            alert("no tenemos mas stock de ese producto")
        }
    }

    function restar() {
        let aux = cantidad;
        if (aux > 0) {
            setCantidad(cantidad - 1)
        }
    }


    return (
        <>
            <button type="button" className="btn btn-primary btn-sm" onClick={() => restar()}> - </button>
            <span>  {cantidad}  </span>
            <button type="button" className="btn btn-primary btn-sm" onClick={() => sumar()}> + </button>
            <br />
            <button type="button" className="btn btn-primary my-3">Agregar al carrito</button>
        </>
    )

}