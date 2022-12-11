import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            value: '',
            textarea: '',
            checkbox: true,
            select: '',
        };
    }

    handleChange = (event) => {
        if (event.target.type === 'text') {
            this.setState({
                value: event.target.value, 
            });
        } else if (event.target.type === 'textarea') {
            this.setState({
                textarea: event.target.value, 
            });
        } else if (event.target.type === 'checkbox') {
            this.setState({
                checkbox: event.target.value, 
            });
        } else if (event.target.type === 'select-one') {
            this.setState({
                    select: event.target.value, 
                });
            } else {
            console.log('Nothing else...');
        }
    };

    render() {
        const {
 value, textarea, checkbox, select, 
} = this.state;
        return (
          <form>
            <label>
              Name:
              <br />
              <input type="text" placeholder="Your full Name" value={value} onChange={this.handleChange} />
              <br />
              <br />
              <textarea value={textarea} onChange={this.handleChange} placeholder="JavaScript is awesome..." />
              <br />
              <br />
              <input type="checkbox" value={checkbox} onChange={this.handleChange} />
              <br />
              <br />
              <select value={select} onChange={this.handleChange}>
                <option value="React">React</option>
                <option value="Angular">Angular</option>
                <option value="NextJS">NextJS</option>
              </select>
            </label>
            <br />
            <br /> 
            <input type="submit" value="Submit" />
          </form> 
        );
    }
}

export default Form;
