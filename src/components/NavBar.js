import React from 'react';
import CartWidget from './CartWidget';
import { NavLink } from 'react-router-dom';
import '../styles.css';

function NavBar() {
    return (
        <>
            <ul className="nav nav-pills" id="navbartop">
                <h4><NavLink to="/" className="nav__link nostyle" >eCommerce</NavLink></h4>
                <li className="nav-item">
                    <NavLink to="/" className="nav-link nav__link" >Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/category/intel" className="nav-link  nav__link">PC/MiniPc/Nuc</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/category/industrial" className="nav-link nav__link">PC industriales</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/category/firewall" className="nav-link nav__link">Firewall</NavLink>
                </li>
                <li className="nav-item">
                    <CartWidget/>
                </li>
        </ul>
        </>
    )
}

export default NavBar;
