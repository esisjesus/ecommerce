import React from 'react';
import './ItemDetail.scss';
import PurchaseItemContainer from '../../Containers/PurchaseItemContainer/PurchaseItemContainer'

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
                    <PurchaseItemContainer max = {props.item.stock} name={props.item.name} image={props.item.imgSrc}/>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;