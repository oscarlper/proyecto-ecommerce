import React, { createContext, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);
    const [cartItems, setCartItems] = useState([0]);

    const addItem = (item,amount) => {
        let itemAmount = {...item, amount};
        if (!isInCart(item.id)) {
            setCart([...cart, itemAmount]);
        } else {
            const cartAux = cart
            const pos = cart.findIndex((item) => item.id === itemAmount.id)
            cartAux[pos].amount = cartAux[pos].amount + amount
            setCart(cartAux)
        };
        setCartItems(parseInt(cartItems)+amount)
    };

    const removeItem = (id) => {
        const pos = cart.findIndex((item) => item.id === id)
        const cant = cart[pos].amount
        setCartItems(cartItems-cant)
        let result = cart.filter((e) => e.id !== id)
        setCart(result);
    }

    const clear = () => {        
        setCartItems(0);
        setCart([]);
    };

    const isInCart = (id) => {
        return cart.some((e) => e.id === id);
    }

    return (
        <CartContext.Provider value={{ cart, cartItems, addItem, removeItem, clear }}> 
            {children}
        </CartContext.Provider>
    );
    
};
export default CartProvider