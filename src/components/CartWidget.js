import React from 'react';
import logo from '../image/cart.png';
import 'bootstrap/dist/css/bootstrap.min.css';

const CartWidget = () => {
    return(
        <div>
            <a
            className="App-link"
            href="localhost:3000"
            rel="noopener noreferrer"
            >
            <img src={logo} alt="cartIcon"/>
            </a>
        </div>        
    )
}

export default CartWidget;