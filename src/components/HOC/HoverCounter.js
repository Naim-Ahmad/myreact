import React from "react"
import withCounter from "./withCounter"

const HoverCounter = (props)=>{
    return <h2 onMouseOver={props.counterFuc}>Hovered {props.counter} times</h2>
}

export default withCounter(HoverCounter)