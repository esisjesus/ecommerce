import React, {useState} from 'react';
import './ItemCount.scss';

function ItemCount(props){
    let max = props.max || 10;
    let min = props.min || 1;
    
    const [isAdd, setAdd] = useState(min);
    

    
    function addition(){
        setAdd(isAdd + 1);
        updateQuantity(isAdd);
    }
    function substraction(){
        setAdd(isAdd - 1)
        updateQuantity(isAdd);
    }
    
    function updateQuantity(e){
        props.setQuantity(e)
    }
    
    
    return <>
        <div className="itm-count-container">
            <button className="itm-count-btn" onClick={substraction} disabled={isAdd === min}>-</button>
            <span>{isAdd}</span>
            <button className="itm-count-btn" onClick={addition} disabled={isAdd === max}>+</button>
        </div>
    </>
}

export default ItemCount