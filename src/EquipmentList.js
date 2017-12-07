import React, { Component } from 'react'
import { List } from 'semantic-ui-react'
import './EquipmentList.css'
import { compose, withState, lifecycle, setDisplayName } from 'recompose'
import { map, pluck } from 'ramda'
import Item from './Item'

const API_URL = 'http://jsonplaceholder.typicode.com/comments'

export default compose(
  withState('itemNames', 'updateItemNames', []),
  lifecycle({
    async componentDidMount() {
      let items = await fetch(API_URL).then(response => response.json())
      let { updateItemNames } = this.props
      updateItemNames(pluck('name', items))
    }
  })
)(({ itemNames }) => (
  <List className="EquipmentList">
    {map(
      name => (
        <List.Item key={name}>
          <Item name={name} />
        </List.Item>
      ),
      itemNames
    )}
  </List>
))

// export default class EquipmentList extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       itemNames: []
//     }
//   }

//   async componentDidMount() {
//     let items = await fetch(API_URL).then(response => response.json())
//     this.setState({ itemNames: items.map(item => item.name) })
//   }

//   render() {
//     return <List className="EquipmentList">{this.renderItems()}</List>
//   }

//   renderItems() {
//     return this.state.itemNames.map(name => (
//       <List.Item key={name}>
//         <Item name={name} />
//       </List.Item>
//     ))
//   }
// }
