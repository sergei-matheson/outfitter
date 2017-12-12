import { fetchItems } from '../Client'
export const REQUEST_ITEMS = 'REQUEST_ITEMS'
export const RECEIVE_ITEMS = 'RECEIVE_ITEMS'
export const FETCH_ITEMS = 'FETCH_ITEMS'

let nextItemId = 0

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
