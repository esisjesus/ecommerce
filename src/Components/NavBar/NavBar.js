import React,{useContext} from "react";
import "./NavBar.scss";
import CartIcon from '../CartIcon/CartIcon';
import {Link} from 'react-router-dom';
import AppContext from '../../context/appContext';


function NavBar(props){
    
    const context = useContext(AppContext);


    return(

        <nav className="navbar">
            <Link to="/">
                <div>
                    <img src="/images/logo-ilgusto.jpeg" alt="logo de ilgusto"/>
                </div>
            </Link>
            <div>
                <ul className="nav-items">
                    <li><Link to="/">Como Comprar</Link></li>
                    <li><Link to="/">Quienes Somos </Link></li>
                    <li onClick={props.toggleCart}><Link><CartIcon />Mi Carrito <div><strong>{context.updated}</strong></div></Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;