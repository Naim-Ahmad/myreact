import React from "react";

export default function WelcomeDialog(props){
    return (
        <>
        <div>
            <h1>{props.title}</h1>
            <p>{props.text}</p>

            {props.children}
        </div>
       
        </>
    )
}