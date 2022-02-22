import React from 'react';

function Item({itemId, itemStock, itemTitle, itemDescription, itemImage, itemPrice}) {

    return<>
    <div className="col-sm-3 mb-2 d-flex align-items-stretch">
        <div className="col">
            <div className="card h-100">
                <img className="card-img-top" alt={itemTitle} src={itemImage}/>
                <div className="card-body">
                    <h6 className="card-title">{itemTitle}</h6>
                    <p className="card-text">{itemDescription}</p>
                    <p className="card-text">Precio: {itemPrice} AR$</p>
                </div>
                <div className="card-footer">
                <p className="card-text">stock: {itemStock} unidades</p>
                </div>
            </div>
        </div>
    </div>
    </>;

}

export default Item;
