import reducer from './reducers'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import { createLogger } from 'redux-logger'

import history from './history'

const composeEnhancers = global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default includeLogging => {
  const middleware = [thunk, routerMiddleware(history)]

  if (includeLogging) {
    middleware.push(createLogger())
  }
  return createStore(reducer, composeEnhancers(applyMiddleware(...middleware)))
}
