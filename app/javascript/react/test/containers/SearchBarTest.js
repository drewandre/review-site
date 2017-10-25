import SearchBar from '../../src/containers/SearchBar';
import SearchField from '../../src/components/SearchField';
import SearchDropdown from '../../src/components/SearchDropdown';
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
    expect(wrapper.state()).toEqual({
      query: '',
      lastKeyPressedTime: 0 ,
      language: '',
      topic: '',
      onlyReviews: false,
      disableFields: true,
      searchError: false
    });
  });

  it('should render the SearchField Component with specific props', () => {
    expect(wrapper.find(SearchField).props()).toEqual({
      className: 'repo-search-bar',
      handlerFunction: jasmine.any(Function),
      placeholder: "Search GitHub repositories"
    });
  });

  it('should render the SearchDropdown Component with specific props', () => {
    expect(wrapper.find(SearchDropdown).props()).toEqual({
      disableField: true,
      onlyReviews: false,
      handleLanguageChange: jasmine.any(Function),
      handleOnlyReviews: jasmine.any(Function),
      handleTopicChange: jasmine.any(Function),
      onlyReviews: false,
      topic: '',
      language: ''
    });
  });

});
