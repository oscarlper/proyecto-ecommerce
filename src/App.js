import React from 'react'
import './App.css';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import NotFound from './components/NotFound.js'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartContainer from './components/CartContainer';

function App() {
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
  );
}

export default App;

