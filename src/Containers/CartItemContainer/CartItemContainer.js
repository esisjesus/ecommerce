import React,{useContext} from 'react';
import CartItem from '../../Components/CartItem/CartItem';
import AppContext from '../../context/appContext';
import './CartItemContainer.scss'

function CartItemContainer(){

    const context = useContext(AppContext)

    

    return(
        <div className="cart-items-ctn">
            {context.cart.map((item, i) =>{
                return <CartItem cartItem={item}  key={i}/>
            })}
        </div>
    )

}

export default CartItemContainer;