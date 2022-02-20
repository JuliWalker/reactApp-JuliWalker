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
        
        const itemCollection = (categoria === 'all') ? db.collection("productos") : db.collection("productos").where('category', '==', categoria)

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
                        <div className="row justify-content-center align-items-center"> 
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