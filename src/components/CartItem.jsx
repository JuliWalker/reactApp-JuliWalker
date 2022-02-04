import react, { useContext } from "react";
import { cartContext } from "./context/CartProvider";

export default function CartItem({producto, cantidad}) {
    
    const { deleteItem } = useContext(cartContext);

    return (
        <>
        <div className="card" style={{width: 15 + 'rem'}}>
                <img src={producto.pictureURL} className="card-img-top" alt={producto.title}></img>
                <div className="card-body">
                    <h5 className="card-title">ID: {producto.id} - {producto.title}</h5>
                    <p className="card-text">{producto.description}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Precio: {producto.price}</li>
                    <li className="list-group-item">Cantidad a comprar: {cantidad}</li>
                    <li className="list-group-item"> <button onClick={() => deleteItem(producto.id)} type="button" className="btn btn-primary my-3">Borrar</button> </li>             
                </ul>
        </div>
    </>
    )

}








