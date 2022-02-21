export default function DetalleCompra(item) {

    return (
        <>
            <ul>
                <li> {item.item.product.title} x {item.item.cantidad} </li>
                <li> Subtotal: {item.item.cantidad * item.item.product.price} </li>
            </ul>
        </>
    )
}

