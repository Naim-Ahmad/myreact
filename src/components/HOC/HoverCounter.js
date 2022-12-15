import React from "react";

export default class HoverCounter extends React.Component {
    state = {count: 0}

    hoveredCounter = ()=>{
        this.setState((prev)=>({count: prev.count +  1}))
    }

    render(){
        return(
            <h2 onMouseOver={this.hoveredCounter}>Hovered {this.state.count} times</h2>
        )
    }
}