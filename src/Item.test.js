import React from 'react'
import { mount } from 'enzyme'
import Item from './Item'

let item, description

const clickTranslate = () => item.find('button.translate').simulate('click')

beforeEach(() => {
  item = mount(<Item name="Witherspoon" />)
})

it('shows the name in the description', () => {
  expect(item.find('.descriptionText').text()).toEqual('Item: Witherspoon!')
})

describe('when the translate button is clicked', () => {
  beforeEach(clickTranslate)

  it('shows the translated description', () => {
    expect(item.find('.descriptionText').text()).toEqual(
      'Article: Witherspoon!'
    )
  })

  describe('and then clicked again', () => {
    beforeEach(clickTranslate)

    it('shows the original description', () => {
      expect(item.find('.descriptionText').text()).toEqual('Item: Witherspoon!')
    })
  })
})
