import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
jest.mock('./Client', () => {
  return {
    fetchItems: jest.fn(() =>
      ['Glove', 'Boot', 'Hood', 'Pauldron'].map(name => {
        return { name }
      })
    )
  }
})

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
})
