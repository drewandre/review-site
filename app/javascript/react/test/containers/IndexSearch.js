import Index from '../../src/containers/Index';
import RepoTile from '../../src/components/RepoTile';
import { mount } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';
import React from 'react';

describe('Index', () => {
  let wrapper;

  beforeEach(() => {
    jasmineEnzyme();
    wrapper = mount(<Index />);
  });

  // it('should should have the specified initial state', () => {
  //   expect(wrapper.state()).toEqual({ results: [] });
  // });

  // it('should render an RepoTile Component', () => {
  //   expect(wrapper.find(RepoTile)).toBePresent();
  // });

});
