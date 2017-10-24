import ReviewContainer from '../../src/containers/ReviewContainer';
import { mount } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';
import React from 'react';

describe('ReviewContainer', () => {
  let wrapper;

  beforeEach(() => {
    jasmineEnzyme();
    wrapper = mount(<ReviewContainer />);
  });

  it('should should have the specified initial state', () => {
    expect(wrapper.state()).toEqual({ reviews:[]});
  });

  it('should render on ReviewTile Component', () => {
    expect(wrapper.find(ReviewTile)).toBePresent();
  });

  // it('should render the ReviewTile Component with specific props when ReviewTile is false', () => {
  //   expect(wrapper.find(ReviewTile).props()).toEqual({
  //     handlerFunction: jasmine.any(Function),
  //     placeholder: ""
  //   });
  // });

});
