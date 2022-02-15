import React from 'react'
//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return <>
      {/* Complemente NavBar con bootstrap */}
      <NavBar />
      <ItemListContainer greetings="Ofertas de la semana"/>
  </>;
  ;
}
export default App;

