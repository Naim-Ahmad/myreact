import React from "react";
import WelcomeDialog from "./WelcomeDialog";

export default class SignupDialog extends React.Component{
    constructor(props){
        super(props)
        this.state = {user: ''}
    }

   handleChange = (e)=>{
    this.setState({user: e.target.value})
   }

   handleClick = () =>{
    if(this.state.user === ''){
        alert('Please Provide something!')
    }else{
        alert(`Welcome aboard, ${this.state.user}!`)
    }
   }

    render(){
        return (
            <WelcomeDialog title="Mars Exploration Program" text="How should we refer to you?">
                <input onChange={this.handleChange} value={this.state.user}/>
                <button type="button" onClick={this.handleClick}>SingUp</button>
            </WelcomeDialog>
        )
    }
}