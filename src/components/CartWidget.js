import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const CartWidget = () => {
    return(
        <div>
            <NavLink to="/" className="nav__link" >
                <img src="/image/cart.png" alt="cartIcon"/>
            </NavLink>
        </div>        
    )
}

export default CartWidget;