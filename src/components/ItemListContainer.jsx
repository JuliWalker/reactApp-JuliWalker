import react from "react";
import { useState } from "react";
import { useEffect } from "react";
import ItemList from "./ItemList";

export default function ItemListContainer({}) {
    
    const [arrayProductos, setArrayProductos] = useState ([
        {id: '1', title: 'Lompa Leopardo', description: 'pantalon con motivo de leopardo', price: 300, pictureURL: '', stock: 10},
        {id: '2', title: 'Medias Flama', description: 'medias con dibujos de llamitas de fuego', price: 100, pictureURL: '', stock: 5},
        {id: '3', title: 'Gorra LA', description: 'gorra de beisbol Los Angeles Angels', price: 200, pictureURL: '', stock: 7}
    ]);

    return (
        <>
            < ItemList arrayProductos={arrayProductos} />
        </>
    )

}