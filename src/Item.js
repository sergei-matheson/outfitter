import React, { Component } from 'react'
import './Item.css'

export default class Item extends Component {
  constructor(props) {
    super(props)
    this.state = { description: 'Item' }
    this.frenchify = this.frenchify.bind(this)
  }

  render() {
    return (
      <div className="Item">
        {this.state.description}: {this.props.name}!
        <button onClick={this.frenchify}>Frenchify!</button>
      </div>
    )
  }

  frenchify() {
    this.setState({ description: 'Article' })
  }
}
