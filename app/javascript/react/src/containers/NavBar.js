import React, { Component } from 'react'
import SearchBar from './SearchBar'
import NavDropdown from '../components/NavDropdown'

class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      results: []
    }
    // this.submission = this.submission.bind(this)
    this.handleSignInOut = this.handleSignInOut.bind(this)
  }

  handleSignInOut(e) {
    let sign_in_or_out, method
    if (current_user) {
      sign_in_or_out = 'sign_out'
      method = 'delete'
    } else {
      sign_in_or_out = 'sign_in'
      method = 'post'
    }

    fetch(`/users/${sign_in_or_out}`, {
      method: `${method}`
      // headers: {
      //   'Content-Type': 'application/json'
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
        <div onClick={this.handleAccountDropDown} id='menu-toggle'>
          <i className="fa fa-bars fa-2x" id='account-menu' aria-hidden="true"></i>
        </div>
          <SearchBar
            // submission={this.submission}
            className='repo-search-bar'
            handleSearch={this.props.handleSearch}
            loading={this.props.loading}
            emptyScreen={this.props.emptyScreen}
            error={this.props.error}
          />
          <NavDropdown
            handleSignInOut={this.handleSignInOut}
          />
          <div id='page-title'>
            RepoRev
          </div>
      </div>
    );
  }
}

export default NavBar;
