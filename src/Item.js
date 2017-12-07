import React, { Component } from 'react'
import { Button, Label } from 'semantic-ui-react'

import './Item.css'

const ENG = 'Item'
const FRE = 'Article'

export default class Item extends Component {
  constructor(props) {
    super(props)
    this.state = { description: 'Item' }
    this.translate = this.translate.bind(this)
  }

  render() {
    return (
      <div className="Item">
        <Label>
          <span className="descriptionText">
            {this.description()}: {this.props.name}!
          </span>
          <Button
            toggle
            active={this.state.translated}
            className="translate"
            onClick={this.translate}
            floated="right"
          >
            Translate!
          </Button>
        </Label>
      </div>
    )
  }

  description() {
    return this.state.translated ? FRE : ENG
  }

  translate() {
    this.setState({
      translated: !this.state.translated
    })
  }
}
