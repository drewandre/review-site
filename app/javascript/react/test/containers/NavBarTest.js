import NavBar from '../../src/containers/NavBar';
import SearchBar from '../../src/containers/SearchBar';
import NavDropdown from '../../src/components/NavDropdown';
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
    expect(wrapper.state()).toEqual({ results: [] });
  });

  it('should render the NavDropdown Component with specific props', () => {
    expect(wrapper.find(NavDropdown).props()).toEqual({
      handleSignInOut: jasmine.any(Function)
    });
  });

});
