import reducer from './reducers'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'

export default includeLogging => {
  const middleware = [thunk]
  if (includeLogging) {
    middleware.push(createLogger())
  }
  return createStore(reducer, applyMiddleware(...middleware))
}
