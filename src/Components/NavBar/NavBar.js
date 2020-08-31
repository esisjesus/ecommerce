import React from "react";
import "./NavBar.scss";
import CartIcon from '../CartIcon/CartIcon';
import {Link} from 'react-router-dom';

function NavBar(){
    return(
        <nav className="navbar">
            <Link to="/">
                <div>
                    <img src="/images/logo-ilgusto.jpeg" alt="logo de ilgusto"/>
                </div>
            </Link>
            <div>
                <ul className="nav-items">
                    <li><a>Como Comprar</a> </li>
                    <li><a>Quienes Somos </a></li>
                    <Link to= "/mi-carrito">
                        <li><CartIcon />Mi Carrito</li>
                    </Link>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;