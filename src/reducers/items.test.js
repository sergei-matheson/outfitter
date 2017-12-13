import itemReducer from './items'
import { requestItems, receiveItems } from '../actions'

describe('requestItems', () => {
  let initialState = {
    itemsById: {},
    itemIds: [],
    isLoading: false
  }

  it('sets is loading to true', () => {
    let { isLoading } = itemReducer(initialState, requestItems())
    expect(isLoading).toBeTruthy()
  })
})
describe('default handling', () => {
  describe('when state is undefined', () => {
    it('sets the initial state', () => {
      expect(itemReducer(undefined, {})).toEqual({
        itemsById: {},
        itemIds: [],
        isLoading: false
      })
    })
  })

  describe('when given a defined state', () => {
    it('returns the given state', () => {
      expect(itemReducer({ turnip: true }, {})).toEqual({ turnip: true })
    })
  })
})

describe('receiveItems', () => {
  let itemIds
  let itemsById
  let isLoading

  let items = [{ id: 23, name: 'first item' }, { id: 200, name: 'second item' }]

  beforeAll(() => {
    let initialState = {
      itemsById: {},
      itemIds: [],
      isLoading: true
    }

    let finalState = itemReducer(initialState, receiveItems(items))
    itemIds = finalState.itemIds
    itemsById = finalState.itemsById
    isLoading = finalState.isLoading
  })

  it('adds the ids of the received items to itemIds', () => {
    expect(itemIds).toEqual([23, 200])
  })

  it('adds the received items keyed by id to itemsById', () => {
    expect(itemsById).toEqual({
      23: { id: 23, name: 'first item' },
      200: { id: 200, name: 'second item' }
    })
  })

  it('sets isLoading to false', () => {
    expect(isLoading).toBeFalsy()
  })
})
