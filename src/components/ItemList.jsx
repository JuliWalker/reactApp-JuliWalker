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