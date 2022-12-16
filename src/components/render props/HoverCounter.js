import React from "react";


export default class HoverCounter extends React.Component{
    render(){
        const {count, hoverHandler} = this.props
        return (
            <h1 onMouseOver={hoverHandler}>Hovered {count} times</h1>
        )
    }
}