jest.mock('./reducers', () => 'combined-reducer')

jest.mock('redux-logger', () => ({
  createLogger: jest.fn().mockReturnValue('created-logger')
}))

jest.mock('react-router-redux', () => ({
  routerMiddleware: jest.fn().mockReturnValue('router-middleware')
}))

jest.mock('redux', () => {
  return {
    createStore: jest.fn(),
    compose: jest.fn().mockReturnValue('composed-middleware'),
    applyMiddleware: jest.fn().mockReturnValue('applied-middleware')
  }
})

jest.mock('history/createBrowserHistory', () =>
  jest.fn().mockReturnValue('created-history')
)

import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

import initStore from './initStore'

describe('when imported', () => {
  it('creates history', () => {
    expect(createHistory).toBeCalled()
  })
})

describe('initialising the store', () => {
  describe('by default', () => {
    beforeEach(() => jest.clearAllMocks())
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

    it('creates router middleware using created history', () => {
      expect(routerMiddleware).toBeCalledWith('created-history')
    })
  })

  describe('when logging is not included', () => {
    beforeEach(() => initStore(false))

    it('adds only thunk and router middleware', () => {
      expect(applyMiddleware).toBeCalledWith(thunk, 'router-middleware')
    })
  })

  describe('when logging is included', () => {
    beforeEach(() => initStore(true))

    it('adds thunk, router and logging middleware', () => {
      expect(applyMiddleware).toBeCalledWith(
        thunk,
        'router-middleware',
        'created-logger'
      )
    })
  })
})
