import React from "react"
import CommentTile from "../components/CommentTile"

class CommentContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      comments: null,
      showComments: false
    }

    this.loadComments = this.loadComments.bind(this)
    this.showComments = this.showComments.bind(this)
  }

  addComment(review_id) {
    fetch(`http://localhost:3000/api/v1/reviews/${review_id}/comments`, {
      credentials: "same-origin",
      method: "POST",
      headers: {"Content-Type": "application/json"}
    }).then(() => {
      this.loadComments()
    })
  }

  loadComments() {
    fetch(`http://localhost:3000/api/v1/reviews/${this.props.reviewId}/comments.json`, {
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
        <CommentTile key={comment.id} body={comment.body} />
      )
    }

    let commentArea;
    if (this.state.showComments) {
      commentArea = (
        <div>
          {comments}
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
