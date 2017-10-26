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
      <div>
        <h1>{this.state.user.name}</h1>
      </div>
    )
  }
}

export default UserShowPage
