import React from 'react'
import { List } from 'semantic-ui-react'
import { compose, withState, lifecycle, setDisplayName } from 'recompose'
import { map, pluck } from 'ramda'
import './EquipmentList.css'
import Item from './Item'

const API_URL = 'http://jsonplaceholder.typicode.com/comments'

export default compose(
  setDisplayName('EquipmentList'),
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
