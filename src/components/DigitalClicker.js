// Code DigitalClicker Component Here
import React, { Component } from 'react'

export default class DigitalClicker extends Component {
  constructor(){
    super();
    this.state = {
      timesClicked: 0
    }
  }

  handleClick = () => {
    this.setState(previousState => {
      return {
        timesClicked: previousState.timesClicked + 1
      }
    })
  }

  render(){
    return (
      <div>
        <label for='times-clicked'>times clicked: {this.state.timesClicked}</label>
        <button name='times-clicked' id="times-clicked" onClick={this.handleClick}>{this.state.timesClicked}</button>
      </div>
    )
  }
}