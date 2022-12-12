import React from 'react';

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit',
};

function TemperatureInput({ scale, temperature, onChangeHandler }) { 
        return (
          <div>
            <fieldset>
              <legend>
                Enter temperature in
                {' '}
                {scaleNames[scale]}
                :
              </legend>
              <input type="text" value={temperature} onChange={(e)=>onChangeHandler(e, scale)} />
            </fieldset>
          </div>
        );
    
}

export default TemperatureInput;
