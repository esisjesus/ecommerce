import React,{useState} from 'react';
import './App.scss';
import NavBar from "../NavBar/NavBar";
import Home from "../../Containers/Home/Home";
import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';



function App() {
  
  return (
    <>
    <NavBar/>
    <Home greeting = "Bienvenido a Il Gusto!"/> 
    <ItemList/>
    </>
  );
}

export default App;
