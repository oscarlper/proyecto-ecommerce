import React, {useContext} from 'react';
import ItemCount from './ItemCount';
import { CartContext } from '../context/CartContext'

export const ItemDetail = ({productSelected}) => {
    
    const { addItem } = useContext(CartContext)
    
    const onAdd=(quantity)=>{
        addItem(productSelected,quantity) 
    }


    return (
        <div className="card text-center">
        <div className="card-header">
            <h2>{productSelected.name}</h2>
        </div>
        <div className="card-body">
            <h5 className="card-title">{productSelected.name}</h5>
            <img className="card-img-top" alt={productSelected.name} src={productSelected.image} style={{width:400}}/>
            <p className="card-text">{productSelected.description}</p>
            <p className="card-text">{productSelected.price} AR$</p>
        </div>
        <div className="card-footer text-muted">
            <ItemCount onAdd={onAdd} itemId={productSelected.id} itemStock={productSelected.stock} />
        </div>
        </div>
    )
}
