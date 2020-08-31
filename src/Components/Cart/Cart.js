import React from 'react';
import "./Cart.scss";

function Cart (){
    return(
        <div className="cart-container">
            <div className="cart-content">
                <h2>Articulos:</h2>
                <h3>El carrito esta vacio! Añade algunos articulos</h3>
            </div>
        </div>
    )
}

export default Cart;