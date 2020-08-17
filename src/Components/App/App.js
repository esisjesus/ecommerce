import React from 'react';
import './App.scss';
import NavBar from "../NavBar/NavBar";
import Home from "../../Containers/Home/Home";
import ItemCount from '../ItemCount/ItemCount';


function App() {
  return (
    <>
    <NavBar/>
    <Home greeting = "Bienvenido a Il Gusto!"/> 
    <ItemCount/>
    </>
  );
}

export default App;
