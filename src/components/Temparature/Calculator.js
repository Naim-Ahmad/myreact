import React from 'react';
import BoilingVerdict from './BoilingVerdict';
import { convert, toCelsius, toFahrenheit } from './lib/converter';
import TemperatureInput from './TemperatureInput';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { temperature: '' , scale: 'c'};
}

handleChange = (event, scale) => {
    this.setState({
        temperature: event.target.value,
        scale: scale
    });
    console.log(scale)
};

    render() {
        
        const {temperature, scale} = this.state
        const celsius = scale === 'f' ? convert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? convert(temperature, toFahrenheit) : temperature;
        return (
          <>
            <TemperatureInput scale='c' onChangeHandler={this.handleChange} temperature={celsius}/>
            <TemperatureInput scale='f' onChangeHandler={this.handleChange} temperature={fahrenheit}/>
            <BoilingVerdict temperature={temperature}/>
          </>
        );
    }
}

export default Calculator;
