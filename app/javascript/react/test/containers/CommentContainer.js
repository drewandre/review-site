import CommentContainer from '../../src/containers/CommentContainer';
import { shallow  } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';
import React from 'react';

describe('CommentContainer', () => {
  let wrapper;

  beforeEach(() => {
    jasmineEnzyme();
    wrapper = shallow(<CommentContainer /> );
  });

  // it('should should have the specified initial state', () => {
  //   expect(wrapper.state()).toEqual({ comments: [] });
  // });

  // it('should render an CommentContainer', () => {
  //   expect(wrapper.find(CommentContainer)).toBePresent();
  // });

});
