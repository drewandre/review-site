import ReviewTile from '../../src/containers/ReviewTile';
import CommentContainer from '../../src/containers/CommentContainer';

import { shallow } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';
import React from 'react';

describe('ReviewTile', () => {
  let wrapper;

  beforeEach(() => {
    jasmineEnzyme();
    wrapper = shallow(<ReviewTile /> );
  });

  // it('should render the ReviewTile Component with specific props', () => {
  //   expect(wrapper.find(ReviewTile).props()).toEqual({
  //     reviewBody: ""
  //   });
  // });

  it('should render an CommentContainer Component', () => {
    expect(wrapper.find(CommentContainer)).toBePresent();
  });

});
