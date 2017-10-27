import ReviewTile from '../../src/components/ReviewTile';
import VoteBox from '../../src/components/VoteBox';
import CommentContainer from '../../src/containers/CommentContainer';

import { mount } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';
import React from 'react';

describe('ReviewTile', () => {
  let wrapper;

  beforeEach(() => {
    jasmineEnzyme();
    wrapper = mount(<ReviewTile /> );
  });

  // it('should render the VoteBox Component with specific props', () => {
  //   expect(wrapper.find(VoteBox).props()).toEqual({
  //     data: '',
  //     upvote: jasmine.any(Function),
  //     downvote: jasmine.any(Function)
  //   });
  // });

});
