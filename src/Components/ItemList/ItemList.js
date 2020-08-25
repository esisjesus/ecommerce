import React,{useState} from 'react';
import Items from '../Items/Items';
import './ItemList.scss';



function ItemList(props){
  
  return( 
    <>
    <div className="item-list">
        {props.items.map((item, i)=>{
            return <Items key={i} items={item}/>
        })}
    </div>
    </>)
}

export default ItemList;
