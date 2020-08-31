import React from 'react';
import './Items.scss'
import {Link} from 'react-router-dom';

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
            <Link to ={`item-detail/${props.items.id}`}>
                <button className="view-details"><ion-icon name="search-outline"></ion-icon>Ver producto</button>
            </Link>
        </div>
    </div>
    )
    
}

export default Items;