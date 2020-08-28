import React, { Component } from 'react';

export default class DigitalClicker extends Component {
  state = {
    timesClicked: 0,
  }

  render() {
    return (
      <button onClick={() => this.setState({timesClicked: this.state.timesClicked + 1})}>
        {this.state.timesClicked}
      </button>
    );
  }
}