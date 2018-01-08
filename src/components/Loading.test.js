import React from 'react'
import { mount } from 'enzyme'

import Loading from './Loading'

let subject

afterEach(() => subject.unmount())

const loader = () => {
  let dimmer = subject.find('Dimmer')
  expect(dimmer.exists()).toBeTruthy()

  let loader = dimmer.find('Loader')
  expect(loader.exists()).toBeTruthy()
  return loader
}

describe('by default', () => {
  it('shows a dimmed loading icon with the default text', () => {
    subject = mount(<Loading />)
    expect(loader().text()).toEqual('Loading...')
  })
})

describe('with a message', () => {
  it('shows a dimmed loading icon with the children rendered', () => {
    subject = mount(<Loading message="Hang on" />)
    expect(loader().text()).toEqual('Hang on')
  })
})

describe('with children', () => {
  it('shows a dimmed loading icon with the children rendered', () => {
    subject = mount(
      <Loading>
        <h1>Wait for a bit</h1>
      </Loading>
    )
    expect(
      loader()
        .find('h1')
        .text()
    ).toEqual('Wait for a bit')
  })
})

describe('with both a message and children', () => {
  it('shows the message', () => {
    subject = mount(<Loading message="The message">The children</Loading>)
    expect(loader().text()).toEqual('The message')
  })
})
