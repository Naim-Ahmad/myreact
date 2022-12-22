import React from "react";

export default class LifeCycle extends React.Component{

    state = {time: new Date(), count: 0}

    componentDidMount(){
      document.title = `clicked ${this.state.count} times`
      this.interval = setInterval(this.tick, 1000)
    }

    componentDidUpdate(){
      document.title = `clicked ${this.state.count} times`
    }

    tick = ()=>{
        this.setState({
            time: new Date()
        })
        clearInterval(this.interval)
    }

    handleClick=()=>{
        this.setState(({count})=>({
            count: count + 1
        }))
    }
    
    render(){
        const {time} = this.state
        return(
            <div>
                <h1>{time.toLocaleTimeString()}</h1>
                <button onClick={this.handleClick}>Click</button>
            </div>
        )
    }
}