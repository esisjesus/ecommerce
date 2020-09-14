import React,{useContext} from 'react';
import CartItemContainer from '../../Containers/CartItemContainer/CartItemContainer';
import AppContext from '../../context/appContext'
import "./Cart.scss";


function Cart (props){
    
    const context = useContext(AppContext);

        return(
            <div className={props.showCart}>
                <div className={context.cart.length > 0? 'cart-content' : 'cart-empty'}>
                    <CartItemContainer/>
                    <h3>Aun no haz agregado nada al carrito! Por favor agrega algun articulo</h3>
                </div>
            </div>
        )
    }

export default Cart;