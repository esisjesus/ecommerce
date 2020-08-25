import React,{useState} from 'react';
import './App.scss';
import NavBar from "../NavBar/NavBar";
import Home from "../../Containers/Home/Home";
import ItemListContainer from '../../Containers/ItemListContainer/ItemListContainer';
import ItemDetailContainer  from '../../Containers/ItemDetailContainer/ItemDetailContainer'




function App() {
  
  return (
    <>
    <NavBar/>
    <Home greeting = "Bienvenido a Il Gusto!"/> 
    <ItemListContainer />
    <ItemDetailContainer/>
    </>
  );
}

export default App;
