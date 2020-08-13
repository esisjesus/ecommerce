import React from 'react';
import './Home.scss'

function Home(props){
    return(
    <div className ="title-cont">
        <h1 className="title">{props.greeting}</h1>
    </div>
    
    )
}

export default Home;