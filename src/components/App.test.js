import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router'
import App from './App'
import initStore from '../initStore'

import { mount } from 'enzyme'

jest.mock('../Client', () => {
  return {
    fetchItems: jest.fn(() => [])
  }
})

describe('when mounted', () => {
  const routeTo = route =>
    mount(
      <Provider store={initStore()}>
        <MemoryRouter initialEntries={[route]}>
          <App />
        </MemoryRouter>
      </Provider>
    )

  const waitForRoute = () => new Promise(resolve => setTimeout(resolve, 0))

  const expectRoutesToComponent = async (path, component) => {
    let subject = routeTo(path)
    await waitForRoute()
    subject.update()
    expect(subject.find(component).exists()).toBeTruthy()
    subject.unmount()
  }

  describe('by default', () => {
    it('it renders the home page', async () =>
      expectRoutesToComponent('/', 'Home'))
  })

  describe('when equipment list is clicked', () => {
    it('it renders the equipment list', async () =>
      expectRoutesToComponent('/equipment-list', 'EquipmentList'))
  })
})
