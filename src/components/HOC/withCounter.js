import React from "react"

const withCounter = (OriginalCounter)=>{
    class newComponent extends React.Component {
        state = {count: 0}
        
        ClickedCounter = ()=>{
            this.setState((prev)=>({count: prev.count +  1}))
        }

        render(){
            return <OriginalCounter counter={this.state.count} counterFuc={this.ClickedCounter}/>
        }
    }
    return newComponent
}

export default withCounter