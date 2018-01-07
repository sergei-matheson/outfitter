import React from 'react'
import { shallow } from 'enzyme'
import Home from './Home'

let subject

beforeEach(() => {
  subject = shallow(<Home />)
})

it('shows a welcome message', () => {
  expect(subject.text()).toEqual('Welcome to Outfitter')
})
