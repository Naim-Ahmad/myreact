import React from 'react';
import BoilingVerdict from './BolingVerdict';

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit',
};

class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = { temperature: '' };
    }

    handleChange = (event) => {
        this.setState({
            temperature: event.target.value,
        });
    };

    render() {
        const { temperature } = this.state;
        const { scale } = this.props;
        return (
          <div>
            <fieldset>
              <legend>
                Enter temperature in
                {' '}
                {scaleNames[scale]}
                :
              </legend>
              <input type="text" value={temperature} onChange={this.handleChange} />
            </fieldset>
            <BoilingVerdict temperature={temperature} />
          </div>
        );
    }
}

export default TemperatureInput;
