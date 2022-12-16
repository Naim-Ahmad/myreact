import React from "react";

class Counter extends React.Component{
    state = {count: 0}

    countHandler = ()=>{
        this.setState((prev)=>({count: prev.count + 1}))
    }
    render(){
        const {count} = this.state
        const {render} =  this.props
        return render(count, this.countHandler)
    }
}

export default Counter