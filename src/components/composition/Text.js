import React from "react"

export default function Text({props}){
    return <div>{props ? props.children : 'A simple text'}</div>
}