import { REQUEST_ITEMS, RECEIVE_ITEMS } from '../actions'
import { map, fromPairs, compose, pluck } from 'ramda'

const receiveItems = (state, { items }) => {
  return {
    ...state,
    itemsById: compose(fromPairs, map(item => [item.id, item]))(items),
    itemIds: pluck('id', items),
    isLoading: false
  }
}

const requestItems = state => ({
  ...state,
  isLoading: true
})

let handlers = {
  [REQUEST_ITEMS]: requestItems,
  [RECEIVE_ITEMS]: receiveItems
}

let defaultHandler = (state, action) =>
  undefined === state ? initialState() : state

const initialState = () => ({
  itemsById: {},
  itemIds: [],
  isLoading: false
})

export default (state, action) => {
  return (handlers[action.type] || defaultHandler)(state, action)
}

/*
state = {
  items: {
    itemsById: { // item data, keyed by id
      <id>:<item>
    },
    itemsIds: [ <id> ] // an array of item ids
  }
}
*/
