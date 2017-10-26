import React from "react"

class UserShowPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userSlug: props.match.params.user_slug,
      user: {}
    }

    this.fetchUser = this.fetchUser.bind(this)
  }

  fetchUser() {
    fetch(`/api/v1/users/${this.state.userSlug}`, {
      credentials: "same-origin"
    }).then(res => res.json())
      .then(data => {
        this.setState({
          user: data
        })
      })
  }

  componentDidMount() {
    this.fetchUser()
  }

  render() {
    return (
      <div className="profile-show">
        <img src={`${this.state.user.avatar_url}`} alt={`${this.state.user.name} profile photo`} className='profile-icon-large' />
        <div className='user-show-page-name'>
          <h2><a href={this.state.user.github_url}>{this.state.user.name}</a></h2>
        </div>
        <br />
        <div className="repo-description">{this.state.user.bio}</div>
        <br />
      </div>
    )
  }
}

export default UserShowPage
