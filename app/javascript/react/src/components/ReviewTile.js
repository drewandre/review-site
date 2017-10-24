import React, { Component } from "react"
import TextInputField from './TextInputField'
import CommentContainer from '../containers/CommentContainer'

class ReviewTile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      reviewBody: 'Here is an example review of my latest fart.'
    }
    this.handleTextInputField = this.handleTextInputField.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleTextInputField(e) {
    console.log("input detected" + e);
    this.setState({ reviewBody: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    let formPayload = {
      //May need to change this variable name to get this to work
      body: this.state.reviewBody
    };
    this.addNewReview(formPayload);
  }
  render() {
    return(
      <div>
        <div className='comments-container'>
          CommentContainer
          <CommentContainer />
        </div>

        <form className='review-tile'>
          <p>TextInputField</p>
          <TextInputField
            content={this.state.reviewBody}
            label= "Review"
            name="review"
            handleChange={this.handleTextInputField}
          />
          <div>
            Submit button
            <input className="button" type="submit" value="Submit" onClick={this.handleSubmit}/>
          </div>
        </form>
      </div>
    )
  }
}

export default ReviewTile;


//API to post to: "/api/v1/users/:user_slug/repos/:repo_slug/reviews/"
