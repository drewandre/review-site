import React from "react"
import ReviewContainer from "./ReviewContainer"
import RepoShowComponent from "../components/RepoShowComponent"

class RepoShowPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      repo: {},
      showNewReview: false
    }

    this.loadRepository = this.loadRepository.bind(this)
    this.toggleShowNewReview = this.toggleShowNewReview.bind(this)
  }

  loadRepository() {
    fetch(`http://localhost:3000/api/v1/users/${this.props.userSlug}/repos/${this.props.repoSlug}.json`, {
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
    console.log(this.state.repo)
    return (
      <div>
        <RepoShowComponent
          repo={this.state.repo}
          toggleShowNewReview={this.toggleShowNewReview}
          showNewReview={this.state.showNewReview}
        />
        <hr />
        <ReviewContainer
          userSlug={this.props.userSlug}
          repoSlug={this.props.repoSlug}
          showNewReview={this.state.showNewReview}
          loadRepository={this.loadRepository}
        />
      </div>
    )
  }
}

export default RepoShowPage
