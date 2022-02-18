import React from 'react';
import ItemCount from './ItemCount';

function Item({itemStock, itemTitle, itemDescription, itemImage}) {

    return<>
    <div className="col col-2">
        <div className="card">
            <div className="card-body">
                <img className="card-img-top" alt={itemTitle} src={itemImage}/>
                <h5 className="card-title">{itemTitle}</h5>
                <p className="card-text">{itemDescription}</p>
                <ItemCount itemStock = {itemStock}/>
            </div>
        </div>
    </div>
    </>;

}

export default Item;
