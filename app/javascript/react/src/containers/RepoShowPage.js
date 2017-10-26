import React from "react"
import ReviewContainer from "./ReviewContainer"
import RepoShowComponent from "../components/RepoShowComponent"

class RepoShowPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      repo: {},
      showNewReview: false,
      userSlug: props.match.params.user_slug,
      repoSlug: props.match.params.repo_slug
    }

    this.loadRepository = this.loadRepository.bind(this)
    this.toggleShowNewReview = this.toggleShowNewReview.bind(this)
  }

  loadRepository() {
    fetch(`/api/v1/users/${this.state.userSlug}/repos/${this.state.repoSlug}.json`, {
      credentials: "same-origin",
      headers: {"Content-Type": "application/json"}
    }).then(res => res.json())
      .then(data => {
        this.setState({
          repo: data
        })
      })
  }

  toggleShowNewReview() {
    this.setState({
      showNewReview: !this.state.showNewReview
    })
  }

  componentDidMount() {
    this.loadRepository()
  }

  render() {
    return (
      <div>
        <RepoShowComponent
          repo={this.state.repo}
          toggleShowNewReview={this.toggleShowNewReview}
          showNewReview={this.state.showNewReview}
        />
        <hr />
        <ReviewContainer
          userSlug={this.state.userSlug}
          repoSlug={this.state.repoSlug}
          showNewReview={this.state.showNewReview}
          loadRepository={this.loadRepository}
        />
      </div>
    )
  }
}

export default RepoShowPage
