import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import '../styles.css';
import { generateOrder, updateStock } from '../services/firebase';
import Swal from "sweetalert2";

const initialBuyer = {
    name: "",
    phone: "",
    email: "",
}

export const CartContainer = () => {

    const {cart,clear,removeItem} = useContext(CartContext)
    const [buyer, setBuyer] = useState(initialBuyer)
    const [sellOk, setSellOk] = useState(false)
    
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
            generateOrder(order)
                .then((res) => {
                    new Swal("Pedido enviado",`Por favor toma nota de este código para continuar la compra con el comercio: ${res.id}`)
                    setSellOk(true)
                })
                .then(()=> cart.forEach((item) => updateStock(item.id,item.amount)))
                .then(()=> clear()
                )
                .catch((err)=> new alert('hubo un error')
                )
        } else {
            new Swal({
                icon: 'error',
                title: "Hay un error en los datos.",
                text: "Por favor revisa tus datos y vuelve a enviar el pedido.",
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
            <th scope="col">Descripción</th>
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

        <div className="container-sm">
            <div className="row">
            <div className="col-3 center"/>
                <div className="col-6 center">
                <h3>Completa el formulario con tus datos para finalizar la compra</h3>
                <form id="buyerForm"
                            onSubmit={handlerSubmit}
                            onChange={handlerChange}>
                    <input
                        placeholder = "Nombre"
                        type="text" 
                        name="name"
                        value={order.name}
                        className="form-control"
                    /><br/>
                    <input 
                        placeholder = "Telefono"
                        type="number" 
                        name="phone"
                        value={order.phone}
                        className="form-control"
                    /><br/>
                    <input
                        placeholder = "Email"
                        type="email" 
                        name="email"
                        value={order.email}
                        className="form-control"
                    /><br/>
                    <button className="btn btn-success d-block mt-2">
                        Enviar orden
                    </button>
                </form>
                </div>
            <div className="col-3 center"/>
            </div>
        </div>

        </div>
        ):(
            sellOk ? (
                <div className="card-body">
                    <div className="card text-center">
                        <h1><strong>Gracias por su compra !!!</strong></h1>
                        <img src="/image/gracias.jpg" className="img-fluid mx-auto" alt="..."></img>
                    </div>
                </div>
            ):(
                <div className="card-body">
                    <div className="card text-center">
                        <h1><strong>Carrito vacío !!!</strong></h1>
                        <img src="/image/empty.png" className="img-fluid mx-auto" alt="..."></img>
                    </div>
                </div>
            )
        )}
    </>
    )
}
export default CartContainer