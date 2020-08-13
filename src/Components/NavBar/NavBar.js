import React from "react";
import "./NavBar.scss";
import CartIcon from '../CartIcon/CartIcon'

function NavBar(){
    return(
        <nav className="navbar">
            <div>
                <img src="/images/logo-ilgusto.jpeg" alt="logo de ilgusto"/>
            </div>
            <div>
                <ul className="nav-items">
                    <li><a href="">Como Comprar</a> </li>
                    <li><a href="">Quienes Somos</a> </li>
                    <li>
                        <div>
                            <CartIcon />
                            <a href="">Mi Carrito</a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;