import react from "react";
import { useState } from "react";
import { useEffect } from "react";
import { BrowserRouter, Switch, Route, useParams, Link, NavLink } from 'react-router-dom';
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer({ }) {

    const [llegoPromesa, setLlegoPromesa] = useState(false);
    const [producto, setProducto] = useState({});
    const { itemId } = useParams();


    useEffect(() => {

        const promesaProductos = new Promise((resolve, reject) => {

            setTimeout(() => {

                resolve([{ id: '1', title: 'Lompa Leopardo', description: 'pantalon con motivo de leopardo', price: 300, pictureURL: 'https://www.duadentalcare.com/wp-content/uploads/2021/03/pantalones-selected-mujer-estampado-de-leopardo-con-elc3a1stico-pantalones-de-chc3a1ndal-croissant.jpg', stock: 10 },
                { id: '2', title: 'Medias Flama', description: 'medias con motivo de llama de fuego', price: 100, pictureURL: 'https://http2.mlstatic.com/D_NQ_NP_773264-MLA42055881724_062020-O.jpg', stock: 5 },
                { id: '3', title: 'Gorra LA', description: 'gorra de beisbol Los Angeles Angels', price: 200, pictureURL: 'https://images.footballfanatics.com/los-angeles-angels/los-angeles-angels-of-anaheim-new-era-authentic-on-field-59fifty-fitted-cap_ss4_p-11882275+u-ar96ykwhf277inej075m+v-d28380da5dee469c97b2fc7227146980.jpg?_hv=1', stock: 7 }]);

            }, 2000)
        });

        promesaProductos
            .then((res) => {
                setLlegoPromesa(true);
                const arrayAux = res;
                setProducto(arrayAux.filter(item => item.id == itemId)[0]);
            })
            .catch((err) => {
                setLlegoPromesa(true);
                console.log(err);
            })
    }, []);

    return (
        <>
            {(llegoPromesa) ?
                <>
                    <div className="container my-5 text-center">
                        <ItemDetail producto={producto} />
                    </div>
                </>
                :
                <>Loading...</>
            }
        </>
    )

}