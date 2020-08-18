import React,{useState} from 'react';
import Items from '../Items/Items';
import './ItemList.scss';



const product = [
    {imgSrc: 'https://www.hola.com/imagenes/cocina/tecnicas-de-cocina/20190613143774/como-hacer-tomates-secos-caseros/0-690-69/tomates-secos-z.jpg',
    name: "Tomates Secos",
    price: 300}
]
  

function ItemList(){
    
  const [items, setItems] = useState([])
  
  const promise = new Promise((resolve, reject) =>{
    setTimeout(()=>{
      if(product){
      resolve(product)
      }else{
      reject(Error('error'))
      }
    }, 5000);
    
  });
  
  promise.then(product=>{
    setItems(product);
  })
    


    return( 
    <>
    <div className="item-list">
        {items.map((item, i)=>{
            return <Items key={i} items={item}/>
        })}
    </div>
    </>)
}

export default ItemList;
