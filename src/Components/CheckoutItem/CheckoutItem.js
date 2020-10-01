import React, {useContext, useEffect} from 'react';
import DeleteIcon from '../DeleteIcon/DeleteIcon';
import AppContext from '../../context/appContext';
import './CheckoutItem.scss'

function CheckoutItem(props){
    const price = props.cartItem.price * props.cartItem.quantity
    const context = useContext(AppContext)

    

    function deleteThisItem(){
        
        context.deleteItem(props.cartItem);
        
    }

    return(
        <div className='checkout-item-ctn'>
            <div className='checkout-item-img'>
                <img src={props.cartItem.image} alt={props.cartItem.name}/>
            </div>
            <div className='checkout-item-info'>
                <span>
                    {props.cartItem.name}
                </span>
                <span className='checkout-quantity'>
                    x{props.cartItem.quantity}
                </span>
                <span>{price}AR$</span>
                <DeleteIcon delete ={deleteThisItem} />
            </div>
        </div>
    )
}
export default CheckoutItem;
