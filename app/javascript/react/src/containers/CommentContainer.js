import React from "react"
import CommentTile from "../components/CommentTile"
import CommentForm from "../components/CommentForm"

class CommentContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      comments: null,
      showComments: false
    }

    this.loadComments = this.loadComments.bind(this)
    this.showComments = this.showComments.bind(this)
    this.addComment = this.addComment.bind(this)
  }

  addComment(formPayload) {
    fetch(`/api/v1/reviews/${this.props.reviewId}/comments.json`, {
      credentials: "same-origin",
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(formPayload)
    }).then(() => {
      this.loadComments()
    })
  }

  loadComments() {
    fetch(`/api/v1/reviews/${this.props.reviewId}/comments.json`, {
      credentials: "same-origin",
      headers: {"Content-Type": "application/json"}
    }).then(res => res.json())
      .then(data => {
        this.setState({
          comments: data
        })
      })
  }

  showComments() {
    if (this.state.comments == null) {
      this.loadComments()
    }
    this.setState({
      showComments: !this.state.showComments
    })
  }

  render() {
    let comments;
    if (this.state.comments) {
      comments = this.state.comments.map(comment =>
        <CommentTile data={comment} key={comment.id} body={comment.body} />
      )
    }

    let commentArea;
    if (this.state.showComments) {
      commentArea = (
        <div>
          {comments}
          <CommentForm addComment={this.addComment} />
          <div className="show-comments">
            <a onClick={this.showComments}>Hide Comments</a>
          </div>
        </div>
      )
    } else {
      commentArea = (
        <div className="show-comments">
          <a onClick={this.showComments}>Show Comments</a>
        </div>
      )
    }

    return (
      commentArea
    )
  }
}

export default CommentContainer
