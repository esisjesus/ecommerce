import React, { useState } from 'react';

const AppContext = React.createContext({});

function AppProviderContext(props){
    const [cart, setCart] = useState([]);
    const [updated, setUpdated] = useState(0);
    
    let helper = 0;
    helper = updated;
    
    function newItem (item){
        
        const elementFound = cart.findIndex(element=>{
            return element.name===item.name;
        })
        if(elementFound !== -1){
            cart[elementFound].quantity += item.quantity;
            setCart([...cart]) 
        }else{
            setCart([...cart, item]);
        }

        setUpdated(helper + item.quantity);
        
    }

    function deleteItem(item){
        
        setCart([...cart.filter((ele, index)=>ele.name!== item.name)])
        setUpdated(helper - item.quantity);

    }

    
    


    return(
        <AppContext.Provider value={{cart, newItem, updated, deleteItem}} >
            {props.children}
        </AppContext.Provider>
    )
}

export const AppProvider = AppProviderContext;
export default AppContext;