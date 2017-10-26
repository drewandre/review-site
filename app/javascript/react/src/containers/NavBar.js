import React, { Component } from "react"
import SearchBar from "./SearchBar"
import NavDropdown from "../components/NavDropdown"

class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: null,
      results: []
    }

    this.handleSignInOut = this.handleSignInOut.bind(this)
    this.handleSignIn = this.handleSignIn.bind(this)
    this.handleSignOut = this.handleSignOut.bind(this)
    this.fetchCurrentUser = this.fetchCurrentUser.bind(this)
  }

  componentDidMount() {
    this.fetchCurrentUser()
  }

  handleSignIn() {
    window.location.replace("/users/auth/github")
  }

  fetchCurrentUser() {
    fetch("/api/v1/current-user", {
      credentials: "same-origin"
    }).then(res => res.json())
      .then(data => {
        this.setState({
          currentUser: data
        })
      })
  }

  handleSignOut() {
    fetch("/users/sign_out", {
      credentials: "same-origin",
      method: "DELETE",
      headers: {"Content-Type": "application/json"}
    }).then(() => {
      this.setState({
        currentUser: null
      })
    })
  }

  handleSignInOut() {
    let sign_in_or_out, method
    if (current_user) {
      sign_in_or_out = "sign_out"
      method = "delete"
    } else {
      sign_in_or_out = "sign_in"
      method = "post"
    }

    fetch(`/users/${sign_in_or_out}`, {
      method: method
      // headers: {
      //   "Content-Type": "application/json"
      // },
      // body: JSON.stringify(content)
    })

    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render(){

    return (
      <div>
        <div onClick={this.handleAccountDropDown} id="menu-toggle">
          <i className="fa fa-bars fa-2x" id="account-menu" aria-hidden="true"></i>
        </div>
        <div id="search-icon">
          <i className="fa fa-search fa-2x" aria-hidden="true"></i>
        </div>

        <div className="row">
          <div id="page-title" className="small-5 small-centered medium-10 medium-offset-4 medium-centered large-12 large-offset-8 large-centered columns end">
            RepoRev
          </div>
        </div>

        <SearchBar
          handleSearch={this.props.handleSearch}
          loading={this.props.loading}
          searchMessage={this.props.searchMessage}
          error={this.props.error}
        />
        <NavDropdown
          currentUser={this.state.currentUser}
          handleSignIn={this.handleSignIn}
          handleSignOut={this.handleSignOut}
          handleSignInOut={this.handleSignInOut}
        />
      </div>
    );
  }
}

export default NavBar;
