import React, { Component } from 'react'
import './EquipmentList.css'

import Item from './Item'

export default class EquipmentList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      itemNames: ['Glove', 'Boot', 'Hood', 'Pauldron']
    }
  }

  render() {
    return <div className="EquipmentList">{this.renderItems()}</div>
  }

  renderItems() {
    return this.state.itemNames.map(name => <Item key={name} name={name} />)
  }
}
