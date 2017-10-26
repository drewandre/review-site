import UserShowPage from '../../src/containers/UserShowPage';
import jasmineEnzyme from 'jasmine-enzyme';
import React from 'react';
import { shallow } from 'enzyme';

describe('UserShowPage', () => {
  let wrapper;

  beforeEach(() => {
    jasmineEnzyme();
    wrapper = shallow(<UserShowPage />);
  });

  // it('should render an h1 tag', () => {
  //   expect(wrapper.find('h1').length).toEqual(1);
  // });

  // it('should render the CommentContainer Component with specific props', () => {
  //   expect(wrapper.find(CommentContainer).props()).toEqual({
  //     userSlug: jasmine.any(Object),
  //     user: {}
  //   });
  // });

});
