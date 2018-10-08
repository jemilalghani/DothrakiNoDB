import React from 'react';
import './Image.css';

export default function Image(props){
    return(
        <div>
            <img className="headerImg" alt="" src={props.view} />
        </div>
    
    )
}