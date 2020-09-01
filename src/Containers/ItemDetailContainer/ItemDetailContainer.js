import React, {useState, useEffect} from 'react';
import ItemDetail from '../../Components/ItemDetail/ItemDetail';



const product = [
  {
    imgSrc: 'https://www.hola.com/imagenes/cocina/tecnicas-de-cocina/20190613143774/como-hacer-tomates-secos-caseros/0-690-69/tomates-secos-z.jpg',
    name: "Tomates Secos",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde voluptatum natus provident, aliquam veniam consequatur porro repudiandae architecto deserunt commodi corporis maxime. Tenetur dolor deleniti, perspiciatis dolorem eum dolore magnam.",
    price: 300,
    id: 0,
    stock: 30
  },
  {
    imgSrc: 'https://www.saboresdemihuerto.com/wp-content/uploads/2015/09/berenjenas-listas.jpg',
    name: "Berenjenas en conserva",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt aperiam, voluptatum ducimus qui alias delectus vitae. Sapiente dolorem voluptates, harum minima unde a voluptas atque id voluptate, omnis quis doloremque?",
    price: 200,
    id: 1,
    stock: 18
  } 
] 


function ItemDetailContainer(match){
        
    
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
  
  useEffect(()=>{
    promise.then(product=>{
    setItems(product[match.match.params.id])
  })}, [])
  
    return(
        <ItemDetail item={items}/>
    )
}

export default ItemDetailContainer