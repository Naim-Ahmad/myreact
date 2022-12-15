import React from "react";


class About extends React.Component{
    render(){
        return(
            <>
            <div className="left-pan">{this.props.left}</div>
            <div className="left-pan">{this.props.right}</div>
            </>
        )
    }
}

export default About