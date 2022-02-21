import ItemCount from "./ItemCount";
import { NavLink } from 'react-router-dom';

export default function itemDetail({ producto, onAdd, added, inicial }) {

    return (
        <>
            <div className="gridDetail text-center">
                <div>
                    <img src={producto.pictureURL} className="img-fluid" alt={producto.title}></img>
                </div>

                <div>
                    <h3 className="mt-5">{producto.title}</h3>
                    <p>{producto.description}</p>
                    <h5 className="my-4">Precio: {producto.price}</h5>
                    <h5 className="mb-5">Stock: {producto.stock}</h5>

                    {added ?
                        <NavLink className="nav-link" to={'/cart'}> Item agregado - Ir al carrito </NavLink>
                        :
                        < ItemCount stock={producto.stock} onAdd={onAdd} inicial={inicial} />
                    }

                </div>

            </div>
        </>
    )

}