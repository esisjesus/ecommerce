import React from 'react';
import './App.scss';
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Containers/Home/Home";


function App() {
  return (
    <>
    <NavBar/>
    <Home greeting = "Bienvenido a Il Gusto!"/> 
    </>
  );
}

export default App;
