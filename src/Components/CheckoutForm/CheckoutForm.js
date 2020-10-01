import React from 'react';
import './CheckoutForm.scss';

function CheckoutForm(props){

    const name = props.setName;
    const phone = props.setPhone;
    const email = props.setEmail; 
    const checkEmail = props.setEmailCheck;

    function setName(event){
        name(event.target.value);
    }
    function setPhone(event){
        phone(event.target.value);
    }
    function setEmail(event){
        email(event.target.value)
    }
    function setEmailCheck(event){
        checkEmail(event.target.value)
    }


    return(
    <>
    <form className="checkout-form">
        <input className='form-input' type="text" placeholder="Escribe tu nombre" required onChange={setName}/>
        <div className='email'>
            <input className='email-input' type="email" name="" id="" placeholder="Escribe tu e-mail" required onChange={setEmail}/>
            <input className='email-input' type="email" name="" id="" placeholder="Repite tu e-mail" required onChange={setEmailCheck}/>
        </div>
        <input className='form-input' type="tel" name="" id="" placeholder="Escribe tu numero de telefono" required onChange={setPhone}/>
    </form>
    </>
    )
}


export default CheckoutForm;