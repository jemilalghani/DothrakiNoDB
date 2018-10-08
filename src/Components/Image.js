import React from 'react';
import './Image.css';

export default function Image(props){
    return(
        <div>
            <img class="headerImg" src={props.view} />
        </div>
    
    )
}