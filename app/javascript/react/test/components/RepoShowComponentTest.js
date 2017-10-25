import RepoShowComponent from '../../src/components/RepoShowComponent';
import{ shallow } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';
import React from 'react';

describe('RepoShowComponent', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow( <RepoShowComponent /> );
  });

  // it('should render one a element', () => {
  //   expect(wrapper.find('a')).toBePresent();
  // });

})
