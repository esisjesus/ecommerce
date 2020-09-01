import React, {useState} from 'react';
import AddToCart from '../../Components/AddToCart/AddToCart';
import ItemCount from '../../Components/ItemCount/ItemCount';



function PurchaseItemContainer(props){
   
const max = props.max;
const [quantity, setQuantity] = useState(1);




    return(
        <>
            <ItemCount max={max} setQuantity={setQuantity}/>
            <AddToCart quantity={quantity}/>
        </>
   )
}

export default PurchaseItemContainer;

