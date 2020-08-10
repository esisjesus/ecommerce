import React from "react";
import "./NavBar.scss";


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
                    <li><a href="">Mi Carrito</a> </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;