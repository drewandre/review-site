import React, { Component } from "react"
import TextInputField from '../components/TextInputField'

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
      //May need to change this variable name to get this to work
      body: this.state.commentBody
    };
    this.addNewComment(formPayload);
  }

  render() {
    return(
      <div>
        <p>Individual comment tile</p>
        {this.state.commentBody}
      </div>
    )
  }
}

export default CommentTile

//API to post to: "/api/v1/reviews/:review_id/comments/"
