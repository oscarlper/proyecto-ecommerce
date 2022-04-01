import React from 'react';
import CartWidget from './CartWidget';
import { NavLink } from 'react-router-dom';
import '../styles.css';

function NavBar() {
    return (
        <>
           <div className="navbar navbar-right navbar-expand navbar-light bg-warning">
        <h4><NavLink to="/" className="nav-link" ><img src="/image/logo.png" className="logo" alt="ecommerce"/></NavLink></h4>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink to="/" className="nav-link" >Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/category/intel" className="nav-link">PC/MiniPc/Nuc</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/category/industrial" className="nav-link">PC industriales</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/category/firewall" className="nav-link">Firewall</NavLink>
                </li>
                <li className="nav-item">
                    <CartWidget/>
                </li>
            </ul>
        </div>
        </>
    )
}

export default NavBar;