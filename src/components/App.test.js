import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import initStore from '../store'

jest.mock('../Client', () => {
  return {
    fetchItems: jest.fn(() => [])
  }
})

it('renders without crashing', () => {
  const root = document.createElement('div')

  render(
    <Provider store={initStore()}>
      <App />
    </Provider>,
    root
  )
})
