import React, { createContext, useState } from "react";

export const cartContext = createContext();

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);


    const addToCart = (product, cantidad) => {
        if (isInCart(product.id)) {
            const indexItem = cart.findIndex(item => item.product.id === product.id);
            cart[indexItem].cantidad = cantidad;
            setCart([...cart]);
        } else {
            setCart([...cart, { product, cantidad }])
        }
    }

    const deleteItem = (id) => {
        const updatedCart = cart.filter(item => item.product.id !== id);
        setCart(updatedCart);
    }

    const sumTotal = () => {
        return (cart.length > 0) ? cart.map((item) => item.product.price * item.cantidad).reduce((a, b) => a + b) : 0;
    }

    const sumTotalItems = () => {
        return (cart.length > 0) ? cart.map((item) => item.cantidad).reduce((a, b) => a + b) : 0;
    }

    const isInCart = (id) => {
        return cart.some(item => item.product.id === id)
    }

    const clearCart = () => {
        setCart([]);
    }

    return (
        <cartContext.Provider value={{ cart, addToCart, deleteItem, clearCart, sumTotal, sumTotalItems, isInCart }}>
            {children}
        </cartContext.Provider>
    )
};

export default CartProvider;