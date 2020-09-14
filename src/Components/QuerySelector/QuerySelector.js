import React,{useState} from 'react';
import './QuerySelector.scss';

function QuerySelector(props){
    
    const [underline, setUnderline]= useState('underline');
    const [newQuery, setNewQuery] = useState(null);
    
    function all(){
        setUnderline('underline');
        
        props.setFilter(null)
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
                <li className='query-selected' onClick={all}>TODO</li>
                <li className='query-selected' onClick={conserva}>CONSERVAS</li>
                <li className='query-selected' onClick={salsa}>SALSAS</li>
                <li className='query-selected' onClick={dips}>DIPS</li>
            </ul>
            <div className={underline}></div>
        </div>

    )
}

export default QuerySelector;