import React from 'react';
import ItemCount from './ItemCount';

function ItemDetail({productSelected}) {

    return<>
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
            <ItemCount itemId={productSelected.id} itemStock={productSelected.stock}/>
        </div>
        </div>
    </>;
}

export default ItemDetail;