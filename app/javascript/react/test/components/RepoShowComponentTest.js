import{ shallow, mount, render } from 'enzyme';
import RepoShowComponent from '../../src/components/RepoShowComponent';

describe('RepoShowComponent', () => {
  let wrapper;
  let user = [
    {github_url: "http://localhost:3000/captainangus/itin",
    user_slug: "captainangus",
    repo_slug: "itin"
    }
  ]

  beforeEach(() => {
    wrapper = shallow(
      <RepoShowComponent user={user}/>
    )
  })

  it('should render one a element' () => {
    expect(wrapper.find('a')).toBePresent()
  })
})
