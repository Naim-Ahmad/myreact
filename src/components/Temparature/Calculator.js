import React from 'react';
import TemperatureInput from './TemperatureInput';

class Calculator extends React.Component {
    render() {
        const { scale } = this.props;
        return (
          <>
            <TemperatureInput scale={scale} />
            <TemperatureInput scale="f" />
          </>
        );
    }
}

export default Calculator;
