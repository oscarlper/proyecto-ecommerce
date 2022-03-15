import React, { useState } from 'react';

function ItemCount({itemStock,onAdd}) {
    
    const [countItem,setCountItem] = useState(1);

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
                <button type="button" className="btn btn-outline-secondary" onClick={handleClickSub}>-</button>&nbsp;
                <strong>{countItem}</strong>&nbsp;
                <button type="button" className="btn btn-outline-secondary" onClick={handleClickSum}>+</button>&nbsp;
                <button type="button" 
                        className="btn btn-outline-success" 
                        onClick={()=> onAdd(countItem)}>
                        Agregar
                </button>
            </div>
        </div>
    </>;
}

export default ItemCount;