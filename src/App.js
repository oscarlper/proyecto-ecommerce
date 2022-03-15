import React from 'react'
import './App.css';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Rutas from './components/Routes'
import CartProvider from './context/CartContext'

function App() {
  return (
    <>  
        <CartProvider>
          <Rutas />
        </CartProvider>
    </>
  );
}

export default App;

