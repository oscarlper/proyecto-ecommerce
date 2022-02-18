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
        <div>Cantidad: {countItem}</div>
        <div class="btn-group-sm" role="group" aria-label="Basic example">
            <button type="button" className="btn btn-primary" onClick={handleClickSubs}>-</button>
            <button type="button" className="btn btn-primary">Agregar</button>
            <button type="button" className="btn btn-primary" onClick={handleClickAdd}>+</button>
        </div>
    </>;
}

export default ItemCount;