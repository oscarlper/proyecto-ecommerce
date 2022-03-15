import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../context/CartContext'


export const CartWidget = () => {

    const {cartItems} = useContext(CartContext)

    return(
        <>
            <NavLink to="/cart" className="nav__link noLinkStyle" >
            <img className="cartIcon" src="/image/cart.png" alt="cartIcon"/>
            {cartItems >= 1
                ?<div className="cartNumber">{cartItems}</div>
                :<div></div>}
            </NavLink>
        </>
    )

}

export default CartWidget;