import React from "react";

class FancyBorder extends React.Component{
    render(){
        return (
            <div className={'FancyBorder FancyBorder-' + this.props.color}>
              {this.props.children}
            </div>
          );
    }
  }

  export default FancyBorder