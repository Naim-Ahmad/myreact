import React from "react";
import HoverCounter from "../render props/HoverCounter";
import counterContext from "./CounterContext";

export default function Product() {
    
        return (
        <>
        <h1>The Product is Hover</h1>
        {<counterContext.Consumer>
            {({count, hoverHandler})=><HoverCounter count={count} hoverHandler={hoverHandler} />}
            </counterContext.Consumer>}
        </>
        );
    
}