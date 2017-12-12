import { fetchItems } from '../Client'
export const TOGGLE_ITEM_TRANSLATION = 'TOGGLE_ITEM_TRANSLATION'
export const ADD_ITEM = 'ADD_ITEM'
export const REQUEST_ITEMS = 'REQUEST_ITEMS'
export const RECEIVE_ITEMS = 'RECEIVE_ITEMS'
export const FETCH_ITEMS = 'FETCH_ITEMS'

let nextItemId = 0

export function addItem(item) {
  return {
    type: ADD_ITEM,
    item: { ...item, id: nextItemId++ }
  }
}

export function toggleItemTranslation(item) {
  return {
    type: TOGGLE_ITEM_TRANSLATION,
    item: item.id
  }
}

const requestItems = () => ({
  type: REQUEST_ITEMS
})

const receiveItems = items => ({
  type: RECEIVE_ITEMS,
  items
})

export const fetchItemsFromAPI = () => {
  return async dispatch => {
    dispatch(requestItems())
    dispatch(receiveItems(await fetchItems()))
  }
}
