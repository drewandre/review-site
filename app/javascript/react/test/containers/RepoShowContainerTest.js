import RepoShowContainer from '../../src/containers/RepoShowContainer';
import { mount } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';
import React from 'react';

describe('RepoShowContainer', () => {
  let wrapper;

  beforeEach(() => {
    jasmineEnzyme();
    wrapper = mount(<RepoShowContainer />);
  });

  it('should should have the specified initial state', () => {
    expect(wrapper.state()).toEqual({ comments:[]});
  });

  it('should render an RepoShowComponent Component', () => {
    expect(wrapper.find(RepoShowComponent)).toBePresent();
  });

  // it('should render the RepoShowComponent Component with specific props when RepoShowComponent is false', () => {
  //   expect(wrapper.find(RepoShowComponent).props()).toEqual({
  //     handlerFunction: jasmine.any(Function),
  //     placeholder: ""
  // });
  //
  // it('should render an RepoShowContainer Container', () => {
  //   expect(wrapper.find(RepoShowContainer)).toBePresent();
  // });
  //
  // it('should render the RepoShowContainer Container with specific props when RepoShowContainer is false', () => {
  //   expect(wrapper.find(RepoShowContainer).props()).toEqual({
  //     handlerFunction: jasmine.any(Function),
  //     placeholder: ""
  //   });
  // });

});
