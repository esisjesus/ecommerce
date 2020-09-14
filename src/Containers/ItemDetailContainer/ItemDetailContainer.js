import React, {useState, useEffect} from 'react';
import ItemDetail from '../../Components/ItemDetail/ItemDetail';
import {getFirestore} from '../../firebase/index';





function ItemDetailContainer(props){
  
  const [item, setItem] = useState({})    
  useEffect(()=>{
    if(props.location.state){
      setItem(props.location.state.item)
    }else{
      const db = getFirestore()
      db.collection('products').doc(props.match.params.id).get().then((qs)=>{
        setItem(qs.data())
      })
    }
  }, [])

  
// const {item} = props.location.state
  
    return(
        <ItemDetail item={item}/>
    )
}

export default ItemDetailContainer