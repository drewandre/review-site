import React, { Component } from "react";
import TextInputField from './TextInputField';
import CommentContainer from '../containers/CommentContainer';

class ReviewTile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      reviewBody: ''
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
        <div className='comments-container'>
          <CommentContainer />
        </div>
    )
  }
}

export default ReviewTile;


//API to post to: "/api/v1/users/:user_slug/repos/:repo_slug/reviews/"
