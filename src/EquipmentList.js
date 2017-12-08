import React from 'react'
import { List, Dimmer, Loader } from 'semantic-ui-react'
import {
  compose,
  withState,
  lifecycle,
  setDisplayName,
  branch,
  renderComponent
} from 'recompose'
import { map, pluck } from 'ramda'
import './EquipmentList.css'
import Item from './Item'

import { fetchItems } from './Client'

export default compose(
  setDisplayName('EquipmentList'),
  withState('itemNames', 'updateItemNames', []),
  withState('isLoading', 'updateIsLoading', false),
  lifecycle({
    async componentDidMount() {
      const { updateIsLoading, updateItemNames } = this.props
      updateIsLoading(true)
      let items = await fetchItems()
      updateItemNames(pluck('name', items))
      updateIsLoading(false)
    }
  }),
  branch(
    ({ isLoading }) => isLoading,
    renderComponent(() => (
      <Dimmer active>
        <Loader>Loading</Loader>
      </Dimmer>
    ))
  )
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
