import { useState,  useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from 'react-router-dom';
import { getFirestore } from '../firebase/firebase'

export default function ItemListContainer({ }) {

    const [llegoPromesa, setLlegoPromesa] = useState(false);
    const [arrayProductos, setArrayProductos] = useState([]);
    const { categoria } = useParams();


    useEffect(() => {

        const db = getFirestore();
        
        if (categoria === 'all') {
            var itemCollection = db.collection("productos")
        } else {
            var itemCollection = db.collection("productos").where('category', '==', categoria)
        }

        // el get devuelve una promesa y hago lo mismo que hacia con el promise
        itemCollection.get()
            .then((querySnapShot) => {
                if (querySnapShot.size === 0) {
                console.log('no hay documentos con en ese query');
                return
                }
                setArrayProductos(querySnapShot.docs.map((doc)=> {
                    return { id: doc.id, ...doc.data() }
                }
                ));
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                setLlegoPromesa(true);
            })

        }, [categoria]);

    return (
        <>
            {(llegoPromesa) ?
                <>
                    <div className="container-md my-5 text-center">
                        <div className="row justify-content-evenly">
                            < ItemList arrayProductos={arrayProductos} />
                        </div>
                    </div>
                </>
                :
                <>Loading...</>
            }
        </>
    )

}