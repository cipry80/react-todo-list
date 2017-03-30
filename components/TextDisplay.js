import React, { Component } from 'react';

export default class TextDisplay extends Component {
  handleClick() {
    console.log(this);
    this.props.deleteLetter();
  }
  render() {
    return <div>
            <h5>Display text: {this.props.text}</h5>
            <button onClick={this.handleClick.bind(this)}>Delete one letter</button>
          </div>
  }
}
