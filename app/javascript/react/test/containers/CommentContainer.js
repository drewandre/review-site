import CommentContainer from '../../src/containers/CommentContainer';
import CommentTile from '../../src/components/CommentTile';
import { mount } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';
import React from 'react';

describe('CommentContainer', () => {
  let wrapper;

  beforeEach(() => {
    jasmineEnzyme();
    wrapper = mount(<CommentContainer /> );
  });

  it('should should have the specified initial state', () => {
    expect(wrapper.state()).toEqual({ comments: null, showComments: false });
  });

});
