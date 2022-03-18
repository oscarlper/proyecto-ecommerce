import React from 'react';
import Item from './Item';

function ItemList(props) {
    
    const {greetings, data}=props
    
    return<>
            <h2>{greetings}</h2>
            {data.map((product) => (
                <Item 
                    key = {product.id}
                    itemId = {product.id}
                    itemStock = {product.stock} 
                    itemTitle = {product.title} 
                    itemImage = {product.image}
                    itemPrice = {product.price}/>
            ))}
    </>;
}

export default ItemList;
