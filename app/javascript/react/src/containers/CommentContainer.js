import React, { Component } from "react";
import CommentTile from '../components/CommentTile';

class CommentContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      comments:[]
    }
    this.addNewComment = this.addNewComment.bind(this)
  }

  componentDidMount() {
    fetch('/api/v1/reviews/:review_id/comments/')
    .then(response => response.json())
    .then(body => {
      this.setState({ comments: body })
    })
  }

  addNewComment(formPayload) {
    fetch('/api/v1/reviews/:review_id/comments/', {
      method: 'POST',
      body: JSON.stringify(formPayload)
    })
    .then(response => reponse.json)
    .then(responseData => {
      this.setState({ comments: [...this.state.comments, responseData] })
    })
  }

  render() {
    let addNewComment=(formPayload) => this.addNewComment(formPayload)

    let comments = this.state.comments.map(comment => {

      return(
        <CommentTile
          key={comment.id}
          id={comment.id}
          body={comment.body}
        />
      )
    })

    return(
      <div>
        {comments}
      </div>
    )
  }
}


export default CommentContainer;
