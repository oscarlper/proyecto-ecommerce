import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function ItemCount({itemStock,onAdd}) {
    
    const [countItem,setCountItem] = useState(1);
    const [status,setStatus] = useState(0);

    const handleClickSub =()=>{
        if (countItem > 1 ) {
            setCountItem(countItem-1);
        }   
    }
    
    const handleClickSum =()=>{
        if (countItem < itemStock) {
            setCountItem(countItem+1);
        }
    }

    return<>
        <div className="btn-group-sm" role="group" aria-label="Basic example">
            <div>
                <strong>Cantidad:</strong>&nbsp;
                <button type="button" className="btn btn-outline-secondary" onClick={handleClickSub} hidden={status === 1}>-</button>&nbsp;
                <strong>{countItem}</strong>&nbsp;
                <button type="button" className="btn btn-outline-secondary" onClick={handleClickSum} hidden={status === 1}>+</button>&nbsp;
                <button type="button" 
                        className="btn btn-outline-success" 
                        onClick={()=>onAdd(countItem)}
                        disabled={countItem === 0 || status === 1}>
                        Agregar
                </button>
                <NavLink to="/cart" className="nav-link nav__link" dissabled={status === 0} >
                    <button type="button" 
                            className="btn btn-outline-warning">
                            Comprar
                    </button>    
                </NavLink>
            </div>
        </div>
    </>;
}

export default ItemCount;