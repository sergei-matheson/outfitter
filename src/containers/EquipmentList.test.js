import React from 'react'
import { mount } from 'enzyme'
import { map, keys, fromPairs, pipe } from 'ramda'
import { createStore } from 'redux'

import EquipmentList from './EquipmentList'

import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import { fetchItemsFromAPI } from '../actions'

const middlewares = [thunk] // add your middlewares like `redux-thunk`
const mockStore = configureStore(middlewares)

jest.mock('../actions', () => ({
  fetchItemsFromAPI: jest.fn(() => dispatch =>
    dispatch({ type: 'mock-action' })
  )
}))

let itemNames = ['Glove', 'Boot', 'Hood', 'Pauldron']
let items = itemNames.map((name, id) => ({ name, id }))

let initialState = {
  items: {
    isLoading: true,
    itemIds: keys(items),
    itemsById: pipe(map(item => [item.id, item]), fromPairs)(items)
  }
}

describe('when rendered', () => {
  let root
  let subject
  let store
  beforeEach(() => {
    store = mockStore(initialState)
    root = mount(<EquipmentList store={store} />)
    subject = root.find('EquipmentList')
  })

  afterEach(() => root.unmount())

  it('fetchs items from the API', () => {
    expect(fetchItemsFromAPI).toHaveBeenCalled()
    expect(store.getActions()[0]).toEqual({ type: 'mock-action' })
  })

  it('extracts item names from store state data', () => {
    expect(subject.props().itemNames).toEqual(itemNames)
  })

  it('sets isLoading from store state data', () => {
    expect(subject.props().isLoading).toBeTruthy()
  })
})
