import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { counter: props.counter };
    }

    increase = () => {
        this.setState((state, props) => ({
            counter: state.counter + props.increment,
        }));
    };

    render() {
        return (
          <div>
            <h1>
              Tasbih is
              {this.state.counter}
            </h1>
            <button type="button" onClick={this.increase}>Count Tasbih</button>
          </div>
        );
    }
}

export default Counter;
