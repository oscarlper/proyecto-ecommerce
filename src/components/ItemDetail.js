import React, { useState } from 'react';
import ItemCount from './ItemCount';

function ItemDetail({productSelected},{countItem}) {

    const [countItem2,setCountItem2] = useState(0);

    const getItemCountParentData = (values) => {
        setCountItem2(values);
        console.log(values);
        console.log(countItem2);
    };

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
            <ItemCount itemId={productSelected.id} itemStock={productSelected.stock} sendDataParent={getItemCountParentData}/>
        </div>
        </div>
    </>;
}

export default ItemDetail;