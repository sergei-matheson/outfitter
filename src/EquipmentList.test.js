import React from 'react'
import { mount } from 'enzyme'

import { map } from 'ramda'

jest.mock('./Client', () => {
  return {
    fetchItems: jest.fn(() =>
      ['Glove', 'Boot', 'Hood', 'Pauldron'].map(name => {
        return { name }
      })
    )
  }
})

import EquipmentList from './EquipmentList'

let list

beforeEach(() => {
  list = mount(<EquipmentList />)
})

afterEach(() => {
  list.unmount()
})

const whenListUpdated = (callback, done) => {
  return setTimeout(() => {
    list.update()
    try {
      callback()
      done()
    } catch (e) {
      done.fail(e)
    }
  }, 100)
}

it('renders four named items', async done => {
  whenListUpdated(() => expect(list.find('Item')).toHaveLength(4), done)
})

describe('the items rendered', () => {
  let items

  it('have names props', async done => {
    whenListUpdated(() => {
      items = list.find('Item')
      expect(items.at(0).props().name).toEqual('Glove')
      expect(items.at(1).props().name).toEqual('Boot')
      expect(items.at(2).props().name).toEqual('Hood')
      expect(items.at(3).props().name).toEqual('Pauldron')
    }, done)
  })
})
