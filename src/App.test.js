import React from 'react'
import expect from 'expect'
import { shallow, mount } from 'enzyme'
import Map from './Map'
const wrapper = shallow(<Map />)

describe('Map Component', () => {
  it('renders h1', () => {
    expect(wrapper.find('h1').text()).toEqual('Hello World')
  })
  it('renders p', () => {
    expect(wrapper.find('p').text()).toEqual('Welcome to my world')
  })
})
