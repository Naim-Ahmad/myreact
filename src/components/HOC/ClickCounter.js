import React from "react";
import withCounter from "./withCounter";

let ClickCounter = (props)=> {
    const { counter, counterFuc } = props;
    
    return(
        <button type="button" onClick={counterFuc}> Clicked {counter} times</button>
    )
    
}

export default withCounter(ClickCounter)