import React from 'react';
import './Items.scss'


function Items(props){
    
    return(
    <div className="item-card-container">
        <div className="item-card-image">
            <img src={props.items.imgSrc} alt=""/>
        </div>
        <div className="item-card-info">
            <h3 className="item-card-product-name">
                {props.items.name} 
            </h3>
            <span className="item-card-price">
                {props.items.price} AR$
            </span>
            <button className="add-to-cart">Agregar a mi carrito</button>
        </div>
    </div>
    )
    
}

export default Items;