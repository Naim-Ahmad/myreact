import React from "react";

export default function Button(props){
   return (
    <div>
        <p>{props.title}</p>
    <button onClick={props.handle1}>
        {props.children}
    </button>
    </div>
   )
}