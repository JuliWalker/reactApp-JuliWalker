import React, { createContext, useState } from "react";

export const cartContext = createContext();

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const addToCart = (product, cantidad) => {
        if (isInCart(product.id)) {
            const indexItem = cart.findIndex(item => item.product.id === product.id);
            cart[indexItem].cantidad = cart[indexItem].cantidad + cantidad;
            setCart([...cart]);
        } else {
            setCart([...cart, { product, cantidad}])
        }
    }

    const deleteItem = (id) => {
        const updatedCart = cart.filter(item => item.product.id !== id);
        setCart(updatedCart);
    }

    const isInCart = (id) => {
        return cart.some(item => item.product.id === id)
    }

    const clearCart = () => {
        setCart([]);
    }

    return (
        <cartContext.Provider value={{ cart, addToCart, deleteItem, clearCart }}>
            {children}
        </cartContext.Provider>
    )
};

export default CartProvider;