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
    compose: jest.fn(() => 'composed-middleware'),
    applyMiddleware: jest.fn(() => 'applied-middleware')
  }
})

import { createStore, applyMiddleware, compose } from 'redux'

import initStore from './store'

import thunk from 'redux-thunk'

describe('initialising the store', () => {
  beforeEach(() => jest.clearAllMocks())

  describe('by default', () => {
    beforeEach(() => initStore())

    it('composes the applied middleware', () => {
      expect(compose).toBeCalledWith('applied-middleware')
    })

    it('includes the combined reducer and applied middleware', () => {
      expect(createStore).toBeCalledWith(
        'combined-reducer',
        'composed-middleware'
      )
    })
  })

  describe('when logging is not included', () => {
    beforeEach(() => initStore(false))

    it('adds only thunk middleware', () => {
      expect(applyMiddleware).toBeCalledWith(thunk)
    })
  })

  describe('when logging is included', () => {
    beforeEach(() => initStore(true))

    it('adds thunk and logging middleware', () => {
      expect(applyMiddleware).toBeCalledWith(thunk, 'created-logger')
    })
  })
})
