import React,{useContext} from 'react';
import CartItem from '../../Components/CartItem/CartItem';
import AppContext from '../../context/appContext';


function CartItemContainer(){

    const context = useContext(AppContext)

    

    return(
        <div>
            {context.cart.map((item, i) =>{
                return <CartItem cartItem={item}  key={i}/>
            })}
        </div>
    )

}

export default CartItemContainer;