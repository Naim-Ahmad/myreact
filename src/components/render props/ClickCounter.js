import React from "react";

export default class ClickCounter extends React.Component{
    render(){
        const {count, clickHandler} = this.props
        return (
            <div>
                <button type="button" onClick={clickHandler}>Clicked {count} times</button>
            </div>
        )
    }
}