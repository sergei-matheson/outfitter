import React from 'react'
import { shallow } from 'enzyme'
import Item from './Item'

let item

beforeEach(() => {
  item = shallow(<Item name="Witherspoon" />)
})

it('shows the name in the description', () => {
  expect(item.find('.description').text()).toEqual('Item: Witherspoon!')
})

describe('when the translate button is clicked', () => {
  beforeEach(() => {
    item.find('.translate').simulate('click')
  })

  it('shows the translated description', () => {
    expect(item.find('.description').text()).toEqual('Article: Witherspoon!')
  })
})
