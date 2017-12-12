import React from 'react'
import { render } from 'react-dom'
import './index.css'
import { Provider } from 'react-redux'

import initStore from './store'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'

const store = initStore(process.env.NODE_ENV !== 'production')

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
