import React from "react"
import RepoShowComponent from "../components/RepoShowComponent"
import ReviewTile from "../components/ReviewTile"

class RepoShowContainer extends React.Component {
  constructor(props)  {
    super(props)
    this.state = {
      repo: {},
      reviews: []
    }
  }

  fetchRepoData(user, repo) {
    fetch(`/api/v1/users/${user}/repos/${repo}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          repo: data
        })
      })
  }

  fetchReviewData(user, repo) {
    fetch(`/api/v1/users/${user}/repos/${repo}/reviews`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          reviews: data
        })
      })
  }

  componentDidMount() {
    const params = this.props.match.params
    this.fetchRepoData(params.user_slug, params.repo_slug)
    this.fetchReviewData(params.user_slug, params.repo_slug)
  }

  render() {
    const reviews = this.state.reviews.map(review =>
      <ReviewTile review={review} comments={["comment 1", "comment 2"]} />
    )

    return (
      <div>
        <RepoShowComponent repo={this.state.repo} />
        {reviews}
      </div>
    )
  }
}

export default RepoShowContainer
