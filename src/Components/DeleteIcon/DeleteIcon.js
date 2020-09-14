import React from 'react';


const style = {
    color: "rgb(255, 51, 51 )"
}

function DeleteIcon(props){
    return(
        <div onClick={props.delete}>
            <ion-icon  style={style} name="trash"></ion-icon>
        </div>
    )
}

export default DeleteIcon;