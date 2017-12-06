import React, { Component } from 'react'
import { List } from 'semantic-ui-react'
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
    return <List className="EquipmentList">{this.renderItems()}</List>
  }

  renderItems() {
    return this.state.itemNames.map(name => (
      <List.Item key={name}>
        <Item name={name} />
      </List.Item>
    ))
  }
}
