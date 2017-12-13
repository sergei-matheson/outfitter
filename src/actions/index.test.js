import { requestItems, receiveItems, fetchItemsFromAPI } from './index'
import { fetchItems } from '../Client'

jest.mock('../Client', () => {
  return {
    fetchItems: jest.fn(() => ['the items'])
  }
})

describe('fetchItemsFromAPI', () => {
  describe('calling the returned thunk', () => {
    let dispatch

    beforeAll(() => {
      dispatch = jest.fn()
      return fetchItemsFromAPI()(dispatch)
    })

    it('dispatches a requestItems action', () => {
      expect(dispatch).toHaveBeenCalledWith(requestItems())
    })

    it('fetches the items', () => {
      expect(fetchItems).toHaveBeenCalled()
    })

    it('dispatches a receiveItems action with the fetched items', () => {
      expect(dispatch).toHaveBeenCalledWith(receiveItems(['the items']))
    })
  })
})
