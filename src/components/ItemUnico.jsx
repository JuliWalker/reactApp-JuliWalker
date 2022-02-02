import react from "react";
import { BrowserRouter, Switch, Route, useParams, Link, NavLink } from 'react-router-dom';

export default function ItemUnico({ item }) {

    const CarritoPrevio = 0;
    const linkString = '/itemsdDetail/' + item.id;

    return (
        <>
            <div className="card my-2" style={{width: 18 + 'rem'}}>
                    <div className="card-body">
                        <h5 className="card-title">ID: {item.id} - {item.title}</h5>
                        <p className="card-text">{item.description}</p>
                        <NavLink className="btn btn-primary" to={linkString}>Item Detail</NavLink> 
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Precio: {item.price}</li>
                        <li className="list-group-item">Stock: {item.stock}</li>
                    </ul>
            </div>
        </>
    )

}