/* eslint-disable react/destructuring-assignment */
import React from 'react';

class Clock extends React.Component {
    state = { date: new Date(), locale: 'en-us' };

    componentDidMount() {
      this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
      clearInterval(this.timerID);
    }

    changeTime = () => {
      // eslint-disable-next-line react/destructuring-assignment
      if (this.state.locale === 'en-us') {
        this.setState({
          locale: 'bn-bd',
        });
      } else {
        this.setState({
          locale: 'en-us',
        });
      }
    };

    tick() {
      this.setState({
        date: new Date(),
      });
    }

    render() {
        return (
          <div>
            <h1>
              Time Of Bangladesh
              {' '}
              {this.state.date.toLocaleTimeString(this.state.locale)}
            </h1>
            <button type="button" onClick={this.changeTime}>Click to change Time</button>
          </div>
        );
    }
}

export default Clock;
