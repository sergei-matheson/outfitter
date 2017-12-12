import React from 'react'
import { connect } from 'react-redux'
import { pipe, values, path, pluck } from 'ramda'
import ItemList from '../components/ItemList'
import { fetchItemsFromAPI } from '../actions/'
import { compose, lifecycle } from 'recompose'

const EQList = compose(
  lifecycle({
    componentDidMount() {
      this.props.fetchItems()
    }
  })
)(props => <ItemList {...props} />)

export default connect(
  store => {
    return {
      itemNames: pipe(path(['items', 'itemsById']), values, pluck('name'))(
        store
      ),
      isLoading: path(['items', 'isLoading'])(store)
    }
  },
  dispatch => {
    return {
      fetchItems: () => {
        return dispatch(fetchItemsFromAPI())
      }
    }
  }
)(EQList)
