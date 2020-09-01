import React, {useState} from 'react';
import './ItemCount.scss';

function ItemCount(props){
    let max = props.max || 10;
    let min = props.min || 1;
    
    const [isAdd, setAdd] = useState(min);
    

    
    function addition(){
        const newValue = isAdd + 1;
        setAdd(newValue);
        props.setQuantity(newValue);
    }
    function substraction(){
        const newValue = isAdd - 1;
        setAdd(newValue);
        props.setQuantity(newValue);
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