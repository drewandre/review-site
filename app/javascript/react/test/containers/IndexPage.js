import IndexPage from '../../src/containers/IndexPage';
import NavBar from '../../src/containers/NavBar';
import IndexSearch from '../../src/containers/IndexSearch';
import { mount } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';
import React from 'react';

describe('IndexPage', () => {
  let wrapper;

  beforeEach(() => {
    jasmineEnzyme();
    wrapper = mount(<IndexPage />);
  });

  it('should should have the specified initial state', () => {
    expect(wrapper.state()).toEqual({ searchResults: [], loading: false });
  });

  it('should render an NavBar Component', () => {
    expect(wrapper.find(NavBar)).toBePresent();
  });

  it('should render an IndexSearch Component', () => {
    expect(wrapper.find(IndexSearch)).toBePresent();
  });

});
