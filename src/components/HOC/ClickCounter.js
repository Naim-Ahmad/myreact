import React from "react";

export default class ClickCounter extends React.Component {
    state = {count: 0}

    ClickedCounter = ()=>{
        this.setState((prev)=>({count: prev.count +  1}))
    }

    render(){
        return(
            <button type="button" onClick={this.ClickedCounter}>Clicked {this.state.count} times</button>
        )
    }
}