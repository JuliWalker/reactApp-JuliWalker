import ItemUnico from "./ItemUnico";

export default function ItemList({ arrayProductos }) {

    return (
        <>
            <div className="container my-5 text-center">
                <div className="row justify-content-center align-items-center">
                    {
                        arrayProductos.map(item => <ItemUnico item={item} key={item.id} />)
                    }
                </div>
            </div>
        </>
    )
}