import React, {useContext, useState} from 'react';
import appContext from '../../context/appContext';
import CheckoutItem from '../CheckoutItem/CheckoutItem';
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import {getFirestore} from '../../firebase/index';
import {Link} from 'react-router-dom';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import './Checkout.scss';



function Checkout(){
    const context= useContext(appContext);
    const cart = context.cart;
    const total = context.total;
    const MySwal = withReactContent(Swal)


    // estados:
    const [name, setName] = useState(null);
    const [phone, setPhone] = useState(null);
    const [email, setEmail] = useState(null);
    const [emailCheck, setEmailCheck] = useState(null)
    
    async function createOrder(){
        
        const buyer = {
            name: name,
            phone: phone,
            email: email
        }
        
        
        const db = getFirestore();
        const orders= db.collection("orders")
        const newOrder ={
            buyer,
            items:cart,
            date: Date.now(),
            total: total
        }
        orders.add(newOrder).then(function(docRef){
            console.log("Documento creado satisfactoriamente ID del documento:", docRef.id)

        })
        .catch(function(error){
            console.error("Error adding document: ", error);
        })
        console.log(buyer.email)

    }

    function succeed(){
        MySwal.fire({
            position: 'center',
            icon: 'success',
            title: 'Tu orden ha sido creada satisfactoriamente!',
            showConfirmButton: false,
            timer: 2000
          })
    }
    
    

    
    

    return(
        <div className="container">
            {context.cart.length > 0 ? 
            <div className="filled-cart">
                <h1 className="title">Finaliza tu compra</h1>
                <div className="purchase-board-ctn">
                    {context.cart.map((item, i) =>{
                        return <CheckoutItem cartItem={item}  key={i}/>
                    })}
                <span className="total"> <strong>Total: </strong>{total} AR$</span>
                </div>
                <CheckoutForm setName={setName} setPhone={setPhone} setEmail={setEmail} setEmailCheck={setEmailCheck}/>
                <button className="create-order" onClick={createOrder, succeed} disabled={email !== emailCheck || name === null || phone===null || email===null || name.length < 1 || email.length < 1 || phone.length < 1}>Crear Orden</button>
            </div>
            :
            <div className="empty-cart-checkout">
                <div className="empty-cart-image"></div>
                <h2>Uy! Parece que aun no agregas nada al carrito! <Link to="/" className="link">Clickea aqui para agregar algo!</Link></h2>
            </div>
        }
        </div>
    )
}

export default Checkout;