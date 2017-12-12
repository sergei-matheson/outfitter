import React from 'react'
import { List, Dimmer, Loader } from 'semantic-ui-react'
import { compose, setDisplayName, branch, renderComponent } from 'recompose'
import { map } from 'ramda'
import './ItemList.css'
import Item from './Item'

export default compose(
  setDisplayName('ItemList'),
  branch(
    ({ isLoading }) => isLoading,
    renderComponent(() => (
      <Dimmer active>
        <Loader>Loading</Loader>
      </Dimmer>
    ))
  )
)(({ itemNames }) => (
  <List className="ItemList">
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
