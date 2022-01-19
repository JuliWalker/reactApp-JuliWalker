import react from "react";
import { useState } from "react";
import { useEffect } from "react";
import ItemList from "./ItemList";

export default function ItemListContainer({ }) {

    const [llegoPromesa, setLlegoPromesa] = useState(false);
    const [arrayProductos, setArrayProductos] = useState([]);


    useEffect(() => {

        const promesaProductos = new Promise((resolve, reject) => {

            setTimeout(() => {
                resolve([{ id: '1', title: 'Lompa Leopardo', description: 'pantalon con motivo de leopardo', price: 300, pictureURL: '', stock: 10 },
                { id: '2', title: 'Medias Flama', description: 'medias con dibujos de llamitas de fuego', price: 100, pictureURL: '', stock: 5 },
                { id: '3', title: 'Gorra LA', description: 'gorra de beisbol Los Angeles Angels', price: 200, pictureURL: '', stock: 7 }]);
            }, 2000)
        });

        promesaProductos
            .then((res) => {
                setLlegoPromesa(true);
                setArrayProductos(res);
            })
            .catch((err) => {
                setLlegoPromesa(true);
                console.log(err);
            })
    });

    return (
        <>
            {(llegoPromesa) ?
                <>
                    <div className="container mt-5 text-center">
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