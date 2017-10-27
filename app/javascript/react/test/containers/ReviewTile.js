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

  it('should render an CommentContainer Component', () => {
    expect(wrapper.find(CommentContainer)).toBePresent();
  });

});
