import React from 'react';
import ItemCount from './ItemCount';

function ItemListContainer(props) {
    const {greetings}=props
    return<>
            <h2>{greetings}</h2>
            <ItemCount  init = "1"
                        itemStock="8"
                        itemTitle="Nuc Intel mini PC" 
                        itemDescription="intel Core i5 mini pc 1cpu 2cores 8threads, ssd 240gb, 16gb ram" itemCountStock="8"
            />
            <ItemCount  init = "1"
                        itemStock="5"
                        itemTitle="PC Industrial Fanless" 
                        itemDescription="Celeron 2core 4threads 4ghz, 8gb ram, ssd 64gb"
            />
    </>;
}

export default ItemListContainer;