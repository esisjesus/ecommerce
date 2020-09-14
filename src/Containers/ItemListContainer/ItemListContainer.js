import React, {useState, useEffect} from 'react';
import ItemList from '../../Components/ItemList/ItemList'
import QuerySelector from "../../Components/QuerySelector/QuerySelector"
// import Loading from '../../Components/Loading/Loading'
import {getFirestore} from '../../firebase/index'



function ItemListContainer() {
  
  // Esta seccion del codigo trae la informacion de los productos para luego ser mapeados y renderizados
  
  const [filter, setFilter] = useState(null)
  const [loading, setLoading] = useState(false)
    
    useEffect(()=>{
      const products =[]
      const db = getFirestore()
      const productsCollection = db.collection('products');

      setLoading(true);
      productsCollection.get().then((qs)=>{
        qs.forEach(doc => {
          products.push({...doc.data(), id:doc.id})
        })
        setItems([...products]);
      })
      setLoading(false)
    }, [])


    useEffect(()=>{
      const products =[]
      const db = getFirestore()
      const productsCollection = db.collection('products');
      const filteredCategory = productsCollection.where('category', '==', filter);
      
      if(filter){
        setLoading(true)
        filteredCategory.get().then((qs)=>{
          qs.forEach(doc => {
            products.push({...doc.data(), id:doc.id})
          })
          setItems([...products]);
          console.log(products)
        })
        setLoading(false)
      }else{
        setLoading(true)
        productsCollection.get().then((qs)=>{
          qs.forEach(doc => {
            products.push({...doc.data(), id:doc.id})
          })
          setItems([...products]);
          console.log(products)
        })
        setLoading(false)
      }
    }, [filter])


  const [items, setItems] = useState([])
  

  
  
    
  return(
    <>
    <QuerySelector setFilter={setFilter}/>
    <ItemList items = {items} />
    </>
  )
}

export default ItemListContainer;