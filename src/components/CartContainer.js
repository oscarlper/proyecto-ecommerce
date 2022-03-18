import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import '../styles.css';
import { generateOrder } from '../services/firebase';

const initialBuyer = {
    name: "",
    phone: "",
    email: "",
}

export const CartContainer = () => {

    const {cart,clear,removeItem} = useContext(CartContext)
    const [buyer, setBuyer] = useState(initialBuyer)
    
    let total = 0

    total = cart.reduce((acum,evt)=>acum+(evt.price*evt.amount),0)
        

    const order = {
        buyer,
        item: cart,
        total,
    }

    const handlerSubmit = (e) => {
        e.preventDefault()
        if (buyer.name !== "" && buyer.phone !== "" && buyer.email !== "") {
            generateOrder(order).then((res) => {
                alert(`Compra exitosa. Orden #: ${res.id}`);
                clear();
            })
        } else {
            console.log({
                title: "Hubo un error en tus datos",
                text: "Revisa el formulario de tus datos y vuelve a enviar el pedido",
                icon: "error",
                button: "Ok",
            })
        }
    }

    const handlerChange = (e) => {
        setBuyer({
            ...buyer,
            [e.target.name]: e.target.value,
        })
    }

return (
    
    <>
    {
        cart.length !== 0 ?
        (
    <div>
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
            { cart.map((evt) => 
                    <tr key={evt.id}>
                        <td><small>{evt.id}</small></td>
                        <td><small>{evt.title}</small></td>
                        <td><small>{evt.price}</small></td>
                        <td><small>{evt.amount}</small></td>
                        <td><small>{evt.amount*evt.price}</small></td>
                        <td><button onClick={()=>removeItem(evt.id)}className="badge bg-danger noLinkStyle">X</button></td>
                    </tr>
            )}
            <tr>
                <td></td><td></td><td></td><td>
                    Total
                </td>
                <td>
                    {total}
                </td>
                <td><button onClick={()=>clear()}className="badge bg-danger noLinkStyle">Vaciar Carrito</button></td>
            </tr>
            </tbody>
        </table>
        <p>Complta con tus datos para finalizar la compra</p>
                                <form id="buyerForm"
                                    onSubmit={handlerSubmit}
                                    onChange={handlerChange}
                                >
                                    <input 
                                        type="text" 
                                        placeholder="Nombre"
                                        name="name"
                                        value={order.name}
                                    />
                                    <input 
                                        type="number" 
                                        placeholder="Telefono"
                                        name="phone"
                                        value={order.phone}
                                    />
                                    <input 
                                        type="email" 
                                        placeholder="Email"
                                        name="email"
                                        value={order.email}
                                    />
                                    <button className="btn btn-success d-block mt-2">
                                        Enviar orden
                                    </button>
                                </form>
        </div>
        ):(
            <div>
                <h4>Carrito vacio !!!</h4>
            </div>
        )}

    </>
    )
}
export default CartContainer