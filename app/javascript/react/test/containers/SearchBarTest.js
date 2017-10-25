import SearchBar from '../../src/containers/SearchBar';
import SearchField from '../../src/components/SearchField';
import { mount } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';
import React from 'react';

describe('SearchBar', () => {
  let wrapper;

  beforeEach(() => {
    jasmineEnzyme();
    wrapper = mount(<SearchBar />);
  });

  it('should should have the specified initial state', () => {
    expect(wrapper.state()).toEqual({ query: '', lastKeyPressedTime: 0 , language: '', topic: '', onlyReviews: false, disableFields: true, searchError: false });
  });

  it('should render an SearchField Component', () => {
    expect(wrapper.find(SearchField)).toBePresent();
  });

});
