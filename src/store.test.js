jest.mock('./reducers', () => 'combined-reducer')

import { createLogger } from 'redux-logger'
jest.mock('redux-logger', () => ({
  createLogger() {
    return 'created-logger'
  }
}))
jest.mock('redux', () => {
  return {
    createStore: jest.fn(),
    applyMiddleware: jest.fn(() => 'applied-middleware')
  }
})

import { createStore, applyMiddleware } from 'redux'

import initStore from './store'

import thunk from 'redux-thunk'

describe('initialising the store', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('includes the combined reducer and applied middleware', () => {
    initStore()
    expect(createStore).toBeCalledWith('combined-reducer', 'applied-middleware')
  })

  it('adds thunk middleware', () => {
    initStore()
    expect(applyMiddleware).toBeCalledWith(thunk)
  })

  describe('when logging is not included', () => {
    it('does not add logging middleware', () => {
      initStore(false)
      expect(applyMiddleware).toBeCalledWith(thunk)
    })
  })

  describe('when logging is included', () => {
    it('adds logging middleware', () => {
      initStore(true)
      expect(applyMiddleware).toBeCalledWith(thunk, 'created-logger')
    })
  })
})
