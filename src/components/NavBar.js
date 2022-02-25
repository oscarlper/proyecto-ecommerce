import React from 'react';
import CartWidget from './CartWidget';
import { NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <>
        <ul class="nav nav-pills" id="navbartop">
            <h4>eCommerce</h4>
            <li class="nav-item">
                <CartWidget/>
            </li>
            <li class="nav-item">
                <NavLink to="/" className="nav-link nav__link" >Home</NavLink>
            </li>
            <li class="nav-item">
                <NavLink to="/category/intel" className="nav-link nav__link">PC/MiniPc/Nuc</NavLink>
            </li>
            <li class="nav-item">
                <NavLink to="/category/industrial" className="nav-link nav__link">PC industriales</NavLink>
            </li>
            <li class="nav-item">
                <NavLink to="/category/firewall" className="nav-link nav__link">Firewall</NavLink>
            </li>
        </ul>
        </>
    )
}

export default NavBar;
