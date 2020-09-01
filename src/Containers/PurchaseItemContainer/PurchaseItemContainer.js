import React, {useState} from 'react';
import AddToCart from '../../Components/AddToCart/AddToCart';
import ItemCount from '../../Components/ItemCount/ItemCount';



function PurchaseItemContainer(props){
   
const max = props.max;
const [quantity, setQuantity] = useState(1);

function onChange(e){
    setQuantity(e)
}


    return(
        <>
            <ItemCount max={max} onChange={onChange}/>
            <AddToCart quantity={quantity}/>
        </>
   )
}

export default PurchaseItemContainer;

