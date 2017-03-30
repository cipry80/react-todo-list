import React, { Component } from 'react';
import TextDisplay from './TextDisplay';

export default class TextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: 'initial text'
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
          placeholder="this is going to be text"
          value={this.state.inputText}
          onChange={this.handleChange.bind(this)}
          />
        <TextDisplay text={this.state.inputText}/>
      </div>
    )
  }
}
