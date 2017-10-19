import SearchBar from '../../src/containers/SearchBar';
import SearchField from '../../src/components/SearchField';
import { mount } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';
import React from 'react';

describe('SearchBar', () => {
  let wrapper;

  beforeEach(() => {
    jasmineEnzyme();
    // spyOn(SearchBar.prototype, 'handlerFunction').and.callThrough();
    wrapper = mount(<SearchBar />);
  });

  // it('should return true', () => {
  //   expect(true).toEqual(true);
  // });

  it('should should have the specified initial state', () => {
    expect(wrapper.state()).toEqual({ errors: {}, query: '', onlyReviews: false });
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

  // describe('handleSearch', () => {
  //   it('should be invoked when the onChange property of the SearchField component is called', () => {
  //     wrapper.find(SearchBar).props().onChange();
  //     expect(SearchBar.prototype.handleSearch).toHaveBeenCalled();
  //   });
  //
  // it('should change the babyElephant property in the state to the opposite boolean value', () => {
  //   wrapper.find(Elephant).props().onClick();
  //   expect(wrapper.state()).toEqual({ babyElephant: true });
  // });
  // });

});
