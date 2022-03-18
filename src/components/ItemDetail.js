import React, {useContext} from 'react';
import ItemCount from './ItemCount';
import { CartContext } from '../context/CartContext'

export const ItemDetail = ({product}) => {

    const { addItem } = useContext(CartContext)
    
    const onAdd=(quantity)=>{
        addItem(product,quantity) 
    }


    return (
        <div className="card text-center">
        <div className="card-header">
            <h2>{product.name}</h2>
        </div>
        <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <img className="card-img-top" alt={product.name} src={product.image} style={{width:400}}/>
            <p className="card-text">{product.description}</p>
            <p className="card-text">{product.price} AR$</p>
        </div>
        <div className="card-footer text-muted">
            <ItemCount onAdd={onAdd} itemId={product.id} itemStock={product.stock} />
        </div>
        </div>
    )
}
