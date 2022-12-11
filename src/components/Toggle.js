/* eslint-disable react/destructuring-assignment */
import React from 'react';

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: true };
        this.toggleFunc = this.toggleFunc.bind(this);
    }

    toggleFunc() {
        this.setState((prevValue) => ({
            isToggleOn: !prevValue.isToggleOn,
        }));
    }

    render() {
        return (
          <div>
            <br />
            <button type="button" onClick={this.toggleFunc}>{this.state.isToggleOn ? 'ON' : 'OFF'}</button>
          </div>
        );
    }
}

export default Toggle;
