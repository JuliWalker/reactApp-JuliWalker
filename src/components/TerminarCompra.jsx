import React, { useState, useRef, useContext } from "react";
import firebase from "firebase";
import { getFirestore } from '../firebase/firebase'
import { cartContext } from "./context/CartProvider";
import DetalleCompra from "./DetalleCompra";
import CompraFinalizada from "./CompraFinalizada";

export default function TerminarCompra() {

    const [orderId, setOrderId] = useState('');

    const [formError, setFormError] = useState(false);

    const { cart, sumTotal } = useContext(cartContext);

    const nameRef = useRef();
    const addressRef = useRef();
    const cityRef = useRef();
    const stateRef = useRef();
    const emailRef = useRef();
    const mobileRef = useRef();

    function handleClick() {

        if (nameRef.current.value.length === 0 || addressRef.current.value.length === 0 || cityRef.current.value.length === 0 || stateRef.current.value.length === 0 || emailRef.current.value.length === 0 || mobileRef.current.value.length === 0) {

            setFormError(true);

        } else {

            setFormError(false);

            const db = getFirestore();
            const orders = db.collection("orders");

            const miOrden = {
                buyer: {
                    name: nameRef.current.value,
                    address: addressRef.current.value,
                    city: cityRef.current.value,
                    state: stateRef.current.value,
                    email: emailRef.current.value,
                    mobile: mobileRef.current.value,
                },
                items: cart,
                total: sumTotal(),
                date: firebase.firestore.Timestamp.fromDate(new Date())
            }

            orders.add(miOrden)
                .then(({ id }) => {
                    setOrderId(id);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }

    return (
        <>
            {(orderId) ?
                < CompraFinalizada idCompra={orderId} />
                :
                <>
                    <h2 className="center mt-3">Dejanos tus datos para poder finalizar la compra!</h2>

                    <div className="grid">

                        <div className="form">
                            <h3>Ingresa tus datos:</h3>
                            <div className="mb-3">
                                <input type="text" name="name" ref={nameRef} placeholder="Nombre y Apelllido" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <input type="text" name="mobile" ref={mobileRef} placeholder="Nro de Celular" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <input type="text" name="email" ref={emailRef} placeholder="Email" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <input type="text" name="state" ref={stateRef} placeholder="Provincia" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <input type="text" name="city" ref={cityRef} placeholder="Ciudad" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <input type="text" name="address" ref={addressRef} placeholder="Dirección" className="form-control" />
                            </div>
                        </div>

                        <div className="detalleCompra">
                            <h3>Detalles de la compra:</h3>
                            {cart.map(item => <DetalleCompra item={item} key={item.product.id} />)}
                            <h4>Total a pagar: {sumTotal()} </h4>
                        </div>

                    </div>

                    <div className="center">
                        {formError &&
                            <>
                                <div className="mb-3">
                                    <p className="error">Faltan datos en el formulario</p>
                                </div>
                            </>
                        }
                        <button className="btn btn-primary center mb-5" onClick={() => handleClick()} >Finalizar compra</button>
                    </div>
                </>
            }
        </>
    );
}