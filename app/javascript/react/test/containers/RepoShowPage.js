import RepoShowPage from '../../src/containers/RepoShowPage';
import RepoShowComponent from '../../src/components/RepoShowComponent';
import ReviewContainer from '../../src/containers/ReviewContainer';

import { shallow } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';
import React from 'react';

describe('RepoShowPage', () => {
  let wrapper;

  beforeEach(() => {
    jasmineEnzyme();
    wrapper = shallow(<RepoShowPage />);
  });

  // it('should should have the specified initial state', () => {
  //   expect(wrapper.state()).toEqual({
  //     repo: {},
  //     showNewReview: false,
  //     userSlug: undefined,
  //     repoSlug: undefined
  //   });
  // });

  // it('should render the RepoShowComponent Component with specific props', () => {
  //   expect(wrapper.find(RepoShowComponent).props()).toEqual({
  //     repo: {},
  //     toggleShowNewReview: jasmine.any(Function),
  //     showNewReview: jasmine.any(Function)
  //   });
  // });

  // it('should render the ReviewContainer container with specific props', () => {
  //   expect(wrapper.find(ReviewContainer).props()).toEqual({
  //     userSlug: undefined,
  //     repoSlug: undefined,
  //     showNewReview: undefined,
  //     loadRepository: undefined,
  //   });
  // });

});
