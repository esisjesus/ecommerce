import React from 'react';
import './AddToCart.scss'

function PurchaseItem(props){

    return( 
        <div>
            <button className='add-to-cart-button' onClick={props.addToCart}>AGREGAR {props.quantity} A MI CARRITO</button>
        </div>
    )
}

export default PurchaseItem;