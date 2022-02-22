import React , {useState} from 'react';

function ItemCount(props) {

    const {itemStock}=props;
        
    const [countItem,setCountItem] = useState(1);
    
    const handleClickSubs =()=>{
        if (countItem > 1 )
        setCountItem(countItem-1);
    }
    const handleClickAdd =()=>{
        if (countItem < itemStock) {
            setCountItem(countItem+1);
        }
    }

    return<>
        <div className="btn-group-sm" role="group" aria-label="Basic example">
            <div>Cantidad: {countItem}</div>
            <button type="button" className="btn btn-primary" onClick={handleClickSubs}>-</button>&nbsp;
            <button type="button" className="btn btn-primary">Agregar</button>&nbsp;
            <button type="button" className="btn btn-primary" onClick={handleClickAdd}>+</button>&nbsp;
        </div>
    </>;
}

export default ItemCount;