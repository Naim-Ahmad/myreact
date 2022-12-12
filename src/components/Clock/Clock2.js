import React from "react";

class Clock2 extends React.Component {
    state = {date: new Date()}

    componentDidMount(){
        setInterval(()=>{
            this.setState({
                date: new Date()
            })
        }, 1000)
    }

    render(){
        return (
            <h1>
                {this.state.date.toLocaleTimeString()}
            </h1>
        )
    }

}

export default Clock2