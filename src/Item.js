import React, { Component } from 'react'
import './Item.css'

export default class Item extends Component {
  constructor(props) {
    super(props)
    this.state = { description: 'Item' }
    this.translate = this.translate.bind(this)
  }

  render() {
    return (
      <div className="Item">
        <span className="description">
          {this.state.description}: {this.props.name}!
        </span>
        <button className="translate" onClick={this.translate}>
          Translate!
        </button>
      </div>
    )
  }

  translate() {
    this.setState({ description: 'Article' })
  }
}
