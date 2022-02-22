import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CartWidget = () => {
    return(
        <div>
            <a
            className="App-link"
            href="localhost:3000"
            rel="noopener noreferrer"
            >
            <img src="./image/cart.png" alt="cartIcon"/>
            </a>
        </div>        
    )
}

export default CartWidget;