import reducer from './reducers'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import { createLogger } from 'redux-logger'

const composeEnhancers = global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const history = createHistory()

export const initStore = includeLogging => {
  const middleware = [thunk, routerMiddleware(history)]

  if (includeLogging) {
    middleware.push(createLogger())
  }
  return createStore(reducer, composeEnhancers(applyMiddleware(...middleware)))
}

export default initStore
