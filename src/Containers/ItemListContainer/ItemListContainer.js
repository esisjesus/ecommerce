import React, {useState} from 'react';
import ItemList from '../../Components/ItemList/ItemList'



const product = [
      {
        imgSrc: 'https://www.hola.com/imagenes/cocina/tecnicas-de-cocina/20190613143774/como-hacer-tomates-secos-caseros/0-690-69/tomates-secos-z.jpg',
        name: "Tomates Secos",
        price: 300,
        id: 0
      },
      {
        imgSrc: 'https://www.saboresdemihuerto.com/wp-content/uploads/2015/09/berenjenas-listas.jpg',
        name: "Berenjenas en conserva",
        price: 200,
        id: 1
      } 
]  

function ItemListContainer() {

    // Esta seccion del codigo trae la informacion de los productos para luego ser mapeados y renderizados
  
  
  const [items, setItems] = useState([])
  
  const promise = new Promise((resolve, reject) =>{
    setTimeout(()=>{
      if(product){
      resolve(product)
      }else{
      reject(Error('error'))
      }
    }, 1000);
    
  });
  
  promise.then(product=>{
    setItems(product);
  })
    
  return(
      <ItemList items = {items} />
  )
}

export default ItemListContainer;