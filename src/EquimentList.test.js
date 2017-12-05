import React from 'react'
import { shallow } from 'enzyme'
import EquipmentList from './EquipmentList'

let list

beforeEach(() => {
  list = shallow(<EquipmentList name="Witherspoon" />)
})

it('renders four named items', () => {
  expect(list.find('Item')).toHaveLength(4)
})

describe('the items rendered', () => {
  let items
  beforeEach(() => {
    items = list.find('Item')
  })

  it('have names props', () => {
    expect(items.at(0).props().name).toEqual('Glove')
    expect(items.at(1).props().name).toEqual('Boot')
    expect(items.at(2).props().name).toEqual('Hood')
    expect(items.at(3).props().name).toEqual('Pauldron')
  })
})
