import React from 'react';
import { NavLink } from 'react-router-dom';

function Item({itemId, itemStock, itemTitle, itemDescription, itemImage, itemPrice}) {

    return<>
    <div className="col-sm-3 mb-2 d-flex align-items-stretch">
        <div className="col">
            <div className="card h-100 text-white bg-dark">
                <img className="card-img-top" alt={itemTitle} src={itemImage}/>
                <div className="card-body">
                    <h6 className="card-title">{itemTitle}</h6>
                </div>
                <div className="card-footer">
                    <p className="card-text">{itemDescription}</p>
                    <p className="card-text">Precio: {itemPrice} AR$</p>
                    <p className="card-text">stock: {itemStock} unidades</p>
                    <NavLink to={`/item/${itemId}`} className="nav__link btn-sm btn-secondary"> Ver detalle </NavLink>
                </div>
            </div>
        </div>
    </div>
    </>;

}

export default Item;
