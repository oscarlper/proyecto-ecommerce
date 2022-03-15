import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import '../styles.css';

const CartContainer = () => {

const {cart,clear,removeItem} = useContext(CartContext)

return (

    <>
    {
        cart.length !== 0 ?
        (
    <table class="table">
    <thead>
        <tr>
    
            <th scope="col">item #</th>
            <th scope="col">Descripcion</th>
            <th scope="col">Precio</th>
            <th scope="col">Cantidad</th>
        </tr>
    </thead>
            { cart.map((e) => 
                
                <tbody>
                    <tr>
                        <th scope="row">{e.id}</th>
                        <td>{e.name}</td>
                        <td>{e.price}</td>
                        <td>0</td>
                        <td><button onClick={()=>removeItem(e.id)}className="badge bg-danger noLinkStyle">X</button></td>
                    </tr>
                </tbody>
            )}
            <button onClick={()=>clear()}className="badge bg-danger noLinkStyle">Vaciar Carrito</button>
        </table>
        ):(
            <div>
                <h4>Carrito vacio !!!</h4>
            </div>
        )}

    </>
    )
}
export default CartContainer