import React from 'react';
import ItemList from './ItemList';

function ItemListContainer(props) {
    const {greetings}=props
    return<>
            <h2>{greetings}</h2>
            <ItemList/>
    </>;
}

export default ItemListContainer;