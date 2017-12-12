import reducer from './reducers'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'

const composeEnhancers = global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default includeLogging => {
  const middleware = [thunk]
  if (includeLogging) {
    middleware.push(createLogger())
  }
  return createStore(reducer, composeEnhancers(applyMiddleware(...middleware)))
}
