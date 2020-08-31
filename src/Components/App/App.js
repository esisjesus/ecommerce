import React from 'react';
import './App.scss';
import NavBar from "../NavBar/NavBar";
import Home from "../../Containers/Home/Home";
import Cart from "../Cart/Cart"
import ItemDetailContainer  from '../../Containers/ItemDetailContainer/ItemDetailContainer'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';



function App() {
  
  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route path="/" exact component= {Home}/>
        <Route path="/item-detail/:id" component={ItemDetailContainer}/>
        <Route path ="/mi-carrito" component ={Cart}/>
      </Switch>
    </Router>
    
    
  );
}

export default App;
