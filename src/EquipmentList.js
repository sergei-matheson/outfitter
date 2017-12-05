import React, { Component } from 'react'
import './EquipmentList.css'

export default class EquipmentList extends Component {
  render() {
    return (
      <div className="EquipmentList">Equipment List for {this.props.name}!</div>
    )
  }
}
