import React from 'react'
import { connect } from 'react-redux'
import { pipe, values, path, pluck } from 'ramda'
import ItemList from '../components/ItemList'
import { fetchItemsFromAPI } from '../actions/'
import { compose, lifecycle, setDisplayName } from 'recompose'

const EquipmentList = compose(
  setDisplayName('EquipmentList'),
  lifecycle({
    componentDidMount() {
      this.props.fetchItems()
    }
  })
)(props => <ItemList {...props} />)

const itemNames = pipe(path(['items', 'itemsById']), values, pluck('name'))
const isLoading = path(['items', 'isLoading'])

export default connect(
  store => {
    return {
      itemNames: itemNames(store),
      isLoading: isLoading(store)
    }
  },
  dispatch => {
    return {
      fetchItems: () => {
        return dispatch(fetchItemsFromAPI())
      }
    }
  }
)(EquipmentList)
