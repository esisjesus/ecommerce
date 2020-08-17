import React, {useState} from 'react';
import './ItemCount.scss';

function ItemCount(){
    let max = 10;
    let min = 0;

    const [isAdd, setAdd] = useState(0);
    
    function addition(){
           setAdd(isAdd + 1) 
    }
    function substraction(){
            setAdd(isAdd - 1)
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