import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function ItemCount({itemStock,onAdd}) {
    
    const [countItem,setCountItem] = useState(1);
    const [isDisabled, setIsDisabled] = useState(true);

    if (itemStock <=0) {
        return <>
            <button type="button" className="btn btn-danger">PRODUCTO SIN STOCK</button><hr/>
            <NavLink className="btn btn-outline-secondary" to="/cart">Ir al carrito</NavLink>&nbsp;
            <NavLink className="btn btn-outline-secondary" to="/">Galeria de Productos</NavLink>
        </>
        
    }

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
        <div className="btn-group-sm" role="group">
            <div>
                <strong>Cantidad:</strong>&nbsp;
                <button type="button" className="btn btn-outline-secondary" disabled={!isDisabled} onClick={handleClickSub}>-</button>&nbsp;
                <strong>{countItem}</strong>&nbsp;
                <button type="button" className="btn btn-outline-secondary" disabled={!isDisabled} onClick={handleClickSum}>+</button>&nbsp;
                <button type="button" className="btn btn-outline-success" 
                    hidden={!isDisabled}
                    onClick={()=> {
                        setIsDisabled(false);
                        onAdd(countItem)
                    }
                }>
                    Agregar
                </button>
                <NavLink className="btn btn-outline-warning" to="/cart" hidden={isDisabled} >Ir al carrito</NavLink>
            </div>
        </div>
    </>;
}

export default ItemCount;