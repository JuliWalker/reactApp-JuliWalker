import react from "react";
import { useState } from "react";
import { useEffect } from "react";
import ItemCount from "./ItemCount";

export default function itemUnico({ item }) {

    const CarritoPrevio = 0;

    return (
        <>
            <div className="card" style={{width: 18 + 'rem'}}>
                    <div className="card-body">
                        <h5 className="card-title">ID: {item.id} - {item.title}</h5>
                        <p className="card-text">{item.description}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Precio: {item.price}</li>
                        <li className="list-group-item">Stock: {item.stock}</li>
                        <li className="list-group-item">< ItemCount CantMax={item.stock} CantIni={CarritoPrevio} /></li>
                    </ul>
            </div>
        </>
    )

}