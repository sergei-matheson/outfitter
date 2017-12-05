import React, { Component } from 'react'
import './EquipmentList.css'

export default class EquipmentList extends Component {
  constructor(props) {
    super(props)
    this.state = { description: 'Equipment list for' }
    this.frenchify = this.frenchify.bind(this)
  }

  render() {
    return (
      <div className="EquipmentList">
        {this.state.description} {this.props.name}!
        <button onClick={this.frenchify}>Frenchify!</button>
      </div>
    )
  }

  frenchify() {
    this.setState({ description: "Liste d'équipement pour" })
  }
}
