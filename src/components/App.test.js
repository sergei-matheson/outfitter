import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter as Router } from 'react-router-redux'
import { MemoryRouter } from 'react-router'
import App from './App'
import { initStore, history } from '../store'

import { mount } from 'enzyme'

jest.mock('../Client', () => {
  return {
    fetchItems: jest.fn(() => [])
  }
})

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

describe('when mounted', () => {
  let subject

  const routeTo = route => {
    subject = mount(
      <Provider store={initStore()}>
        <MemoryRouter initialEntries={[route]}>
          <App />
        </MemoryRouter>
      </Provider>
    )
  }

  const expectComponent = name => {
    subject.update()
    expect(subject.find(name).exists()).toBeTruthy()
  }

  afterEach(() => subject.unmount())

  describe('by default', () => {
    beforeEach(() => routeTo('/'))

    it('it renders the home page', () => {
      expectComponent('Home')
    })
  })

  describe('when equipment list is clicked', () => {
    beforeEach(() => routeTo('/equipment-list'))

    it('it renders the equipment list', () => {
      expectComponent('EquipmentList')
    })
  })
})
