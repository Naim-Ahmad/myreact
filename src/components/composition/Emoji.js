import React from "react";
import Text from "./Text";

export default class Emoji extends React.Component{
    addEmoji = (text, Emoji)=>{
        return `${Emoji} ${text} ${Emoji}`
    }
    render(){
        return <Text addEmoji={this.addEmoji}/>
    }
}