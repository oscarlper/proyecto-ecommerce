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
            <th scope="col">item Cod.</th>
            <th scope="col">Descripcion</th>
            <th scope="col">Precio U.</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Precio Total por Item</th>
        </tr>
    </thead>
            { cart.map((e) => 
                <tbody>
                    <tr>
                        <th scope="row">{e.id}</th>
                        <td><small>{e.name}</small></td>
                        <td>{e.price}</td>
                        <td>{e.amount}</td>
                        <td>{e.amount*e.price}</td>
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