import react from "react";
import { useState } from "react";
import { useEffect } from "react";
import ItemCount from "./ItemCount";

export default function itemDetail({ producto }) {

    const CarritoPrevio = 0;

    return (
        <>
            <div className="card" style={{width: 30 + 'rem'}}>
                    <img src={producto.pictureURL} className="card-img-top" alt={producto.title}></img>
                    <div className="card-body">
                        <h5 className="card-title">ID: {producto.id} - {producto.title}</h5>
                        <p className="card-text">{producto.description}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Precio: {producto.price}</li>
                        <li className="list-group-item">Stock: {producto.stock}</li>
                        <li className="list-group-item">< ItemCount CantMax={producto.stock} CantIni={CarritoPrevio} /></li>
                    </ul>
            </div>
        </>
    )

}