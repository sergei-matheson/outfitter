//import { TOGGLE_ITEM_TRANSLATION, ADD_ITEM } from '../actions'
import { ADD_ITEM, REQUEST_ITEMS, RECEIVE_ITEMS } from '../actions'
import { map, fromPairs, compose, pluck } from 'ramda'
const addItem = ({ itemsById, itemIds }, { item }) => {
  let id = item.id
  return {
    itemsById: { ...itemsById, [id]: item },
    itemIds: [...itemIds, id]
  }
}

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
  [ADD_ITEM]: addItem,
  [REQUEST_ITEMS]: requestItems,
  [RECEIVE_ITEMS]: receiveItems
}

let defaultHandler = (state, action) =>
  undefined === state ? initialState() : state

const initialState = () => {
  return {
    itemsById: {
      1: { name: 'woot' }
    },
    itemIds: [1],
    isLoading: false
  }
}

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
