import React, {useContext} from 'react';
import DeleteIcon from '../DeleteIcon/DeleteIcon';
import "./CartItem.scss";
import AppContext from '../../context/appContext';

function CartItem(props){

    const context = useContext(AppContext)

    function deleteThisItem(){
        
        context.deleteItem(props.cartItem);
        
    }

    return(
        <div className='cart-item-ctn'>
            <div className='cart-item-img'>
                <img src={props.cartItem.image} alt={props.cartItem.name}/>
            </div>
            <div className='cart-item-info'>
                <span>
                    {props.cartItem.name}
                </span>
                <span className='quantity'>
                    x{props.cartItem.quantity}
                </span>
                <DeleteIcon delete ={deleteThisItem} />
            </div>
        </div>
    )
}

export default CartItem;