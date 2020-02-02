import React, { Component } from 'react'

export default class Counter extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      count: props.initialCount
    }
  }


  render() {
    return (
      <div>
        <button>-</button>
        <span>{this.props.initialCounter}</span>
        <button>+</button>
      </div>
    )
  }
}