import ReviewContainer from '../../src/containers/ReviewContainer';
import TextInputField from '../../src/components/TextInputField';
import { shallow } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';
import React from 'react';

describe('ReviewContainer', () => {
  let wrapper;

  beforeEach(() => {
    jasmineEnzyme();
    wrapper = shallow(<ReviewContainer /> );
  });

  it('should should have the specified initial state', () => {
    expect(wrapper.state()).toEqual({ userSlug: undefined, repoSlug: undefined, reviews: [] });
  });

});
