import React from 'react';

class Warning extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isWarning: true };
    }

    handleClick = () => {
        if (this.state.isWarning) {
            this.setState({
                isWarning: false,
            });
        } else {
            this.setState({
                isWarning: true,
            });
        }
    };

    render() {
        const { isWarning } = this.state;
        return (
          <div>
            <WarningDiv warn={isWarning} />
            <button onClick={this.handleClick}>{!isWarning ? 'Show' : 'Hide'}</button>
          </div>
        );
    }
}

function WarningDiv(props) {
    if (!props.warn) {
        return null;
    }

    return (
      <h1>Warning!</h1>
    );
}

export default Warning;
