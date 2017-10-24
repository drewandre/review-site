import React, { Component } from "react";
import TextInputField from '../components/TextInputField';

class CommentTile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      commentBody:''
    }
    this.handleTextInputField = this.handleTextInputField.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleTextInputField(e) {
    this.setState({ commentBody: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    let formPayload = {
      body: this.state.commentBody
    };
    this.addNewComment(formPayload);
  }

  render() {
    return(
      <div>
        {this.state.commentBody}
      </div>
    )
  }
}

export default CommentTile

//API to post to: "/api/v1/reviews/:review_id/comments/"
