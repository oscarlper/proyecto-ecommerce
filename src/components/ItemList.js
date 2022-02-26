import React from 'react';
import Item from './Item';

function ItemList(props) {
    
    const {greetings, products}=props
    
    return<>
            
            <h2>{greetings}</h2>
            {products.map((product) => (
                <Item 
                    key = {product.id}
                    itemId = {product.id}
                    itemStock = {product.stock} 
                    itemTitle = {product.name} 
                    itemImage = {product.image}
                    itemPrice = {product.price}/>
            ))}
    </>;
}

export default ItemList;
