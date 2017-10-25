import ReviewContainer from '../../src/containers/ReviewContainer';
import TextInputField from '../../src/components/TextInputField';
import { mount  } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';
import React from 'react';

describe('ReviewContainer', () => {
  let wrapper;

  beforeEach(() => {
    jasmineEnzyme();
    wrapper = mount(<ReviewContainer /> );
  });

  // it('should render an TextInputField', () => {
  //   expect(wrapper.find(TextInputField)).toBePresent();
  // });

  // it('should should have the specified initial state', () => {
  //   expect(wrapper.state()).toEqual({ reviews: [] });
  // });

});
