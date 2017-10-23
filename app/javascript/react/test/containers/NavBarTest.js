import NavBar from '../../src/containers/NavBar';
import SearchField from '../../src/components/SearchField';
import { mount } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';
import React from 'react';

describe('NavBar', () => {
  let wrapper;

  beforeEach(() => {
    jasmineEnzyme();
    wrapper = mount(<NavBar />);
  });

  it('should should have the specified initial state', () => {
    expect(wrapper.state()).toEqual({ results: [], dropdown: false });
  });

  it('should render an SearchField Component', () => {
    expect(wrapper.find(SearchField)).toBePresent();
  });

  it('should render the SearchField Component with specific props when SearchField is false', () => {
    expect(wrapper.find(SearchField).props()).toEqual({
      handlerFunction: jasmine.any(Function),
      placeholder: "Search GitHub repositories"
    });
  });

});
