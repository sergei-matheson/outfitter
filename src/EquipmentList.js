import React, { Component } from 'react'
import './EquipmentList.css'

import Item from './Item'

export default class EquipmentList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="EquipmentList">
        <Item name="Glove" />
        <Item name="Boot" />
      </div>
    )
  }
}
