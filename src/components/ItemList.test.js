import React from 'react'
import { mount } from 'enzyme'

import { map } from 'ramda'

import ItemList from './ItemList'

let subject

const itemNames = ['Glove', 'Boot', 'Hood', 'Pauldron']

const initSubject = isLoading => {
  subject = mount(<ItemList itemNames={itemNames} isLoading={isLoading} />)
}

afterEach(() => {
  subject.unmount()
})

describe('when loading', () => {
  beforeEach(() => initSubject(true))

  it('shows a loading message', () => {
    expect(subject.find('Loading').text()).toEqual('Loading items...')
  })
})

describe('when loading is finished', () => {
  beforeEach(() => initSubject(false))

  it('renders four named items', () => {
    expect(subject.find('Item')).toHaveLength(4)
  })

  describe('the items rendered', () => {
    it('have names props', () => {
      let items = subject.find('Item')
      expect(items.at(0).props().name).toEqual('Glove')
      expect(items.at(1).props().name).toEqual('Boot')
      expect(items.at(2).props().name).toEqual('Hood')
      expect(items.at(3).props().name).toEqual('Pauldron')
    })
  })
})
