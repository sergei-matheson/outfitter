import React from 'react'
import { List } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import { map } from 'ramda'
import {
  compose,
  setDisplayName,
  branch,
  renderComponent,
  setPropTypes
} from 'recompose'

import Loading from './Loading'

import './ItemList.css'
import Item from './Item'

export default compose(
  setDisplayName('ItemList'),
  setPropTypes({
    isLoading: PropTypes.bool.isRequired,
    itemNames: PropTypes.array.isRequired
  }),
  branch(
    ({ isLoading }) => isLoading,
    renderComponent(() => <Loading>Loading items...</Loading>)
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
