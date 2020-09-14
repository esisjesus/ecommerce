import React, {useState, useContext} from 'react';
import AddToCart from '../../Components/AddToCart/AddToCart';
import ItemCount from '../../Components/ItemCount/ItemCount';
import AppContext from '../../context/appContext'


function PurchaseItemContainer(props){
   
const max = props.max;
const [quantity, setQuantity] = useState(1);

const context = useContext(AppContext);

function addToCart(){
    context.newItem({image:props.image, name:props.name, quantity})
}



    return(
        <>
            <ItemCount max={max} setQuantity={setQuantity}/>
            <AddToCart quantity={quantity} addToCart={addToCart} />
        </>
   )
}

export default PurchaseItemContainer;

