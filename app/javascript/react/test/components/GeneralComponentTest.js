import GeneralComponent from '../../src/components/GeneralComponent';
import React from 'react'
import { mount, shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import jasmineEnzyme from 'jasmine-enzyme';

configure({ adapter: new Adapter() });

describe('A test for App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<GeneralComponent />)
  })

  it('should pass', () => {
    expect(wrapper.find('h1').text()).toEqual("Hello World")
  })
})
