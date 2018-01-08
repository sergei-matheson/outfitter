import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter as Router } from 'react-router-redux'
import App from './components/App'
import { initStore, history } from './store'

jest.mock('./Client', () => {
  return {
    fetchItems: jest.fn(() => [])
  }
})

describe('smoke test', () => {
  it('renders without crashing', () => {
    const root = document.createElement('div')

    render(
      <Provider store={initStore()}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>,
      root
    )
  })
})
