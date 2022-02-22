import { useContext, useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import ItemDetail from "./ItemDetail";
import { cartContext } from "./context/CartProvider";
import { getFirestore } from '../firebase/firebase';
import Loader from "./Loader";

export default function ItemDetailContainer({ }) {

    const { addToCart, isInCart, cart } = useContext(cartContext);

    const [llegoPromesa, setLlegoPromesa] = useState(false);
    const [producto, setProducto] = useState({});
    const [CarritoPrevio, setCarritoPrevio] = useState(1);
    
    const { itemId } = useParams();

    useEffect(() => {

        const db = getFirestore();

        const itemCollection = db.collection("productos");

        const miItem = itemCollection.doc(itemId);

        miItem.get()
            .then((doc) => {
                if (!doc.exists) {
                    console.log('no existe ese documento');
                    return
                }
                setProducto({ id: doc.id, ...doc.data() });
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                setLlegoPromesa(true);
            })
    }, [itemId]);

    useEffect(() => {
        if (isInCart(itemId)) {
            const indexItem = cart.findIndex(item => item.product.id === itemId);
            let aux = cart[indexItem].cantidad;
            setCarritoPrevio(aux);
        } else {
            setCarritoPrevio(1);
        }
    }, []);

    const [added, setAdded] = useState(false);

    function onAdd(cantidad) {
        setAdded(true);
        addToCart(producto, cantidad)
    }

    return (
        <>
            {(llegoPromesa) ?
                <>
                    <div className="container my-5">
                        <ItemDetail producto={producto} onAdd={onAdd} added={added} inicial={CarritoPrevio} />
                    </div>
                </>
                :
                <Loader/>
            }
        </>
    )

}