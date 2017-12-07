import React, { Component } from 'react'
import { List } from 'semantic-ui-react'
import './EquipmentList.css'

import Item from './Item'

const API_URL = 'http://jsonplaceholder.typicode.com/comments'

export default class EquipmentList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      itemNames: []
    }
  }

  async componentDidMount() {
    let items = await fetch(API_URL).then(response => response.json())
    this.setState({ itemNames: items.map(item => item.name) })
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
