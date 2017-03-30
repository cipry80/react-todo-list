import React, { Component } from 'react';
//import TextDisplay from './TextDisplay';

export default class TodoInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: ''
    }
  }

  handleChange(e){
    this.setState({
      inputText: e.target.value
    })
  }
  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="To do list enter here"
          value={this.state.inputText}
          onChange={this.handleChange.bind(this)}
          />
        <button>Submit</button>
      </div>
    )
  }
}
