import React, { Component } from 'react';

export default class TextDisplay extends Component {

  render() {
    return <div> Display text: {this.props.text}</div>
  }
}
