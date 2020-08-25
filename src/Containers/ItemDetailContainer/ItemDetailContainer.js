import React, {useState, useEffect} from 'react';
import ItemDetail from '../../Components/ItemDetail/ItemDetail';



const product =
    {
      imgSrc: 'https://www.hola.com/imagenes/cocina/tecnicas-de-cocina/20190613143774/como-hacer-tomates-secos-caseros/0-690-69/tomates-secos-z.jpg',
      name: "Tomates Secos",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit ut veniam sit voluptatem reiciendis eum, nemo ipsa facilis eos! Sed enim, fuga veniam cum nam harum ipsa aspernatur libero eaque provident ipsam facere rem distinctio quidem corporis minima consequatur optio.",
      price: 300
    };


function ItemDetailContainer(){
        
    
const [items, setItems] = useState([])
  
  const promise = new Promise((resolve, reject) =>{
    setTimeout(()=>{
      if(product){
      resolve(product)
      }else{
      reject(Error('error'))
      }
    }, 3000);
    
  });
  
  useEffect(()=>{
    promise.then(product=>{
    setItems(product)
  })}, [])
  
    return(
        <ItemDetail item={items}/>
    )
}

export default ItemDetailContainer