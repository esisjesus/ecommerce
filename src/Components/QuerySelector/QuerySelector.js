import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import './QuerySelector.scss';

function QuerySelector(props){
    
    const [underline, setUnderline]= useState('underline');
    
    function all(){
        setUnderline('underline');
        
        props.setFilter('');
        
    }
    function conserva(){
        setUnderline('conserva');
       
        props.setFilter('conserva')
        
    }
    function salsa(){
        setUnderline('salsa');

        props.setFilter('salsa')
        
    }
    function dips(){
        setUnderline('dips');

        props.setFilter('dips');
        
    }

    return(
        <div className='query-ctn'>
            <ul className='query-selector'>
                <li className='query-selected' onClick={all}><Link to='/' className='link' >TODO</Link></li>
                <li className='query-selected' onClick={conserva}><Link to='/categories/conservas' className='link'>CONSERVAS</Link></li>
                <li className='query-selected' onClick={salsa}><Link to='/categories/salsas' className='link'>SALSAS</Link></li>
                <li className='query-selected' onClick={dips}><Link to='/categories/dips' className='link'>DIPS</Link></li>
            </ul>
            <div className={underline}></div>
        </div>

    )
}

export default QuerySelector;