import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemListContainer from './ItemListContainer'
import NavBar from './NavBar'
import ItemDetailContainer from './ItemDetailContainer'
import NotFound from './NotFound'
import CartContainer from './CartContainer'

const Rutas = () => {
    return (
        <BrowserRouter>
            <NavBar/>
            <Routes>                                                     
                <Route path="/" element={<ItemListContainer/>}/> 
                <Route path="/category/:id" element={<ItemListContainer/>}/>
                <Route path="/item/:id" element={<ItemDetailContainer/>}/>
                <Route path="/*" element={<NotFound/>}/>
                <Route path="/cart" element={<CartContainer/>}/>
            </Routes>
        </BrowserRouter> 
    )
}
export default Rutas