import React from 'react'
import { render } from 'react-dom'
import './index.css'
import { Provider } from 'react-redux'

import { ConnectedRouter as Router } from 'react-router-redux'
import { initStore, history } from './store'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'

const store = initStore(process.env.NODE_ENV !== 'production')

render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
