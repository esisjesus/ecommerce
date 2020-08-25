import React from 'react';
import './ItemDetail.scss';
import ItemCount from '../ItemCount/ItemCount';
import CartIcon from '../CartIcon/CartIcon'


function ItemDetail(props){
    return(
        <div className='item-detail-container'>
            <div className='image-container'>
                <img src={props.item.imgSrc} alt={props.item.name}/>
            </div>
            <div className='info-container'>
                <div className="text-info">
                    <h2 className='info-title'>
                        {props.item.name}
                    </h2>
                    <p className='info-description'>
                        {props.item.description}
                    </p>
                </div>
                <div className="add-to-cart-info">
                    <span>
                        Cantidad:
                    </span>
                    <ItemCount/>
                    <button className='add-to-cart-button'>AGREGAR A MI CARRITO<CartIcon/></button>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;