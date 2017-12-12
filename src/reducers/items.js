//import { TOGGLE_ITEM_TRANSLATION, ADD_ITEM } from '../actions'
import { ADD_ITEM } from '../actions'

const addItem = ({ itemsById, itemIds }, { item }) => {
  let id = item.id
  return {
    itemsById: { ...itemsById, [id]: item },
    itemIds: [...itemIds, id]
  }
}

let handlers = { [ADD_ITEM]: addItem }

let defaultHandler = (state, action) =>
  undefined === state ? initialState() : state

const initialState = () => {
  return { itemsById: {}, itemIds: [] }
}

export default (state, action) => {
  return (handlers[action.type] || defaultHandler)(state, action)
}

/*
state = {
  items {
    itemsById: { // item data, keyed by id
      <id>:<item>
    },
    itemsIds: [ <id> ] // an array of item ids
  }
}
*/
