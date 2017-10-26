import React, { Component } from "react";
import TextInputField from "../components/TextInputField";
import CommentContainer from "../containers/CommentContainer";

class ReviewTile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      reviewBody: ""
    }
    this.handleTextInputField = this.handleTextInputField.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleTextInputField(event) {
    console.log("input detected" + event);
    this.setState({ reviewBody: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault();
    let formPayload = {
      body: this.state.reviewBody
    };
    this.addNewReview(formPayload);
  }
  render() {
    return(
        <div className="comments-container">
          <CommentContainer />
        </div>
    )
  }
}

export default ReviewTile;
