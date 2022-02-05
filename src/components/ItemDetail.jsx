import ItemCount from "./ItemCount";
import { NavLink } from 'react-router-dom';

export default function itemDetail({ producto, onAdd, added, inicial }) {

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
                        
                        {added ? 
                        <NavLink className="nav-link" to={'/cart'}> <li className="list-group-item"> Item agregado - Ir al carrito </li> </NavLink>  
                        : 
                        <li className="list-group-item">< ItemCount stock={producto.stock} onAdd={onAdd} inicial={inicial} /></li>
                        }
                        
                    </ul>
            </div>
        </>
    )

}