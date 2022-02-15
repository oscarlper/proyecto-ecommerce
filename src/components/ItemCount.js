import React , {useState} from 'react';

function ItemCount(props) {

    const {itemStock}=props;
    const {itemTitle}=props;
    const {itemDescription}=props;

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
        <div className="col col-2">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{itemTitle}</h5>
                    <p className="card-text">{itemDescription}</p>
                    <div>Cantidad: {countItem}</div>
                    <div class="btn-group-sm" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-primary" onClick={handleClickSubs}>-</button>
                        <button type="button" className="btn btn-primary">Agregar</button>
                        <button type="button" className="btn btn-primary" onClick={handleClickAdd}>+</button>
                    </div>
                </div>
            </div>
        </div>
    </>;
}

export default ItemCount;