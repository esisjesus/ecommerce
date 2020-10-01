import React,{useState} from 'react';
import './App.scss';
import NavBar from "../NavBar/NavBar";
import Home from "../../Containers/Home/Home";
import Cart from "../Cart/Cart"
import ItemDetailContainer  from '../../Containers/ItemDetailContainer/ItemDetailContainer'
import Checkout from "../Checkout/Checkout"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {AppProvider} from '../../context/appContext'


function App() {

  const [showCart, setShowCart] = useState("hidden-cart-container");
  
  function toggleCart(){
    if(showCart === "hidden-cart-container"){
      setShowCart("show-cart-container")
    }else if(showCart==="show-cart-container"){
      setShowCart("hidden-cart-container")
    }
  }

  return (
    <AppProvider>
      <Router>
        <NavBar toggleCart={toggleCart}/>
        <Cart showCart={showCart}/>
        <Switch>
          <Route path="/" exact component= {Home}/>
          <Route path="/item-detail/:id" component={ItemDetailContainer}/>
          <Route path="/categories/:categoryId" component={Home}/>
          <Route path="/finalizar-compra" component={Checkout}/>
        </Switch>
      </Router>
    </AppProvider>
    
    
  );
}

export default App;
