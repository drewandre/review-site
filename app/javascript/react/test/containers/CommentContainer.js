import CommentContainer from '../../src/containers/CommentContainer';
import CommentTile from '../../src/components/CommentTile';
import { mount } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';
import React from 'react';

describe('CommentContainer', () => {
  let wrapper;

  beforeEach(() => {
    jasmineEnzyme();
    wrapper = mount(<CommentContainer />);
  });

  it('should should have the specified initial state', () => {
    expect(wrapper.state()).toEqual({ comments:[]});
  });

  it('should render on CommentTile Component', () => {
    expect(wrapper.find(CommentTile)).toBePresent();
  });

  // it('should render the CommentTile Component with specific props when CommentTile is false', () => {
  //   expect(wrapper.find(CommentTile).props()).toEqual({
  //     handlerFunction: jasmine.any(Function),
  //     placeholder: ""
  //   });
  // });

});
