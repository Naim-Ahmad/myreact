import React from "react";

class Emoji extends React.Component {
     // eslint-disable-next-line
    constructor(props){
        super(props)
    }
    addEmoji = (text, Emoji)=>{
        return `${Emoji} ${text} ${Emoji}`
    }

    render(overrided){
        let text = 'I am programing language'
        if(overrided) text = overrided
        return (
            <div>{text}</div>
        )
    }
}

export default Emoji