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
    <table className="table">
    <thead>
        <tr>
            <th scope="col">item Cod.</th>
            <th scope="col">Descripcion</th>
            <th scope="col">Precio U.</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Precio Total por Item</th>
        </tr>
    </thead>
    <tbody>
            { cart.map((e) => 
                    <tr key={e.id}>
                        <td><small>{e.id}</small></td>
                        <td><small>{e.title}</small></td>
                        <td><small>{e.price}</small></td>
                        <td><small>{e.amount}</small></td>
                        <td><small>{e.amount*e.price}</small></td>
                        <td><button onClick={()=>removeItem(e.id)}className="badge bg-danger noLinkStyle">X</button></td>
                    </tr>
            )}
            <tr>
                <td></td><td></td><td></td><td>Total</td><td>{cart.reduce((acum,e)=>acum+(e.price*e.amount),0)}</td>
                <td><button onClick={()=>clear()}className="badge bg-danger noLinkStyle">Vaciar Carrito</button></td>
            </tr>
            </tbody>
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