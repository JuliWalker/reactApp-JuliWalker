import react from "react";
import { useState } from "react";
import { useEffect } from "react";
import ItemUnico from "./ItemUnico";

export default function ItemList({arrayProductos}) {
    
    return (
        <>
            {
                arrayProductos.map(item=> <ItemUnico item={item} key={item.id}/>)
            }
        </>
    )

}