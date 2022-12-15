import Emoji from "./Emoji";
export default class Text extends Emoji {
    constructor(props){
        super(props)
    }

    render(){
        let decoratedText =  this.addEmoji('I am javaScript I am programing language', '⭐')
        return (
           super.render(decoratedText)
        )
    }
}