import React from 'react';
import CartIcon from '../CartIcon/CartIcon'

function PurchaseItem(props){
    return( 
        <div className="add-to-cart-info">
            <button className='add-to-cart-button'>AGREGAR A MI CARRITO<CartIcon/>{props.quantity}</button>
        </div>
    )
}

export default PurchaseItem;