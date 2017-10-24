import{ shallow, mount, render } from 'enzyme';
import RepoShowComponent from '../../src/components/ReviewTile';

describe ('ReviewTile', () => {
  let wrapper;
  let review = [
    {reviewBody: "This is a review test."}
  ]

  beforeEach(() => {
    wrapper = shallow(
      <ReviewTile review={review}/>
    )
  })

  it('should render')
}) 
