import React from "react"
import ReviewTile from "../components/ReviewTile"

const voteFetch = (review_id, method, fetchReviews) => {
  fetch(`http://localhost:3000/api/v1/reviews/${review_id}/${method}.json`, {
    credentials: "same-origin",
    method: "POST",
    headers: {"Content-Type": "application/json"}
  }).then(() => {
    fetchReviews()
  })
}

class ReviewContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userSlug: "zerovolts",
      repoSlug: "gitquest",
      reviews: []
    }

    this.handleUpvote = this.handleUpvote.bind(this)
    this.handleDownvote = this.handleDownvote.bind(this)
    this.fetchReviews = this.fetchReviews.bind(this)
  }

  componentDidMount() {
    this.fetchReviews()
  }

  fetchReviews() {
    fetch(`http://localhost:3000/api/v1/users/${this.state.userSlug}/repos/${this.state.repoSlug}/reviews.json`, {
      credentials: "same-origin",
      headers: {"Content-Type": "application/json"}
    }).then(res => res.json())
      .then(data => {
        this.setState({
          reviews: data.sort((a, b) => a.rating < b.rating)
        })
      })
  }

  handleUpvote(id) {
    let review = this.state.reviews.find(review => review.id == id)
    if (review.user_vote != true) {
      voteFetch(id, "upvote", this.fetchReviews)
    } else {
      this.handleUnvote(id)
    }
  }

  handleDownvote(id) {
    let review = this.state.reviews.find(review => review.id == id)
    if (review.user_vote != false) {
      voteFetch(id, "downvote", this.fetchReviews)
    } else {
      this.handleUnvote(id)
    }
  }

  handleUnvote(id) {
    voteFetch(id, "unvote", this.fetchReviews)
  }

  // unused
  fetchReview(id) {
    fetch(`http://localhost:3000/api/v1/reviews/${id}.json`, {
      credentials: "same-origin",
      headers: {"Content-Type": "application/json"}
    }).then(res => res.json())
      .then(data => {
        this.setState({
          data: data
        })
      })
  }

  render() {
    let reviews = this.state.reviews.map(review =>
      <ReviewTile
        id={review.id}
        key={review.id}
        data={review}
        rating={review.rating}
        body={review.body}
        handleUpvote={() => this.handleUpvote(review.id)}
        handleDownvote={() => this.handleDownvote(review.id)}
      />
    )
    // <ReviewTile />

    return (
      <div>
        {reviews}
      </div>
    )
  }
}

export default ReviewContainer
