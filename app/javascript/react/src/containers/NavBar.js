import React, { Component } from 'react'
import SearchBar from './SearchBar'
import NavDropdown from '../components/NavDropdown'

class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      results: [],
      dropdown: false
    }
    this.handleSignInOut = this.handleSignInOut.bind(this)
  }

  handleSignInOut() {
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

    let dropdown
    if(this.state.dropdown) {
      dropdown = <NavDropdown
        handleSignInOut={this.handleSignInOut}
      />
    } else {
      dropdown = null
    }

    return (
      <div>
        <div onClick={this.handleAccountDropDown} id='menu-toggle'>
          <i className="fa fa-bars fa-2x" aria-hidden="true"></i>
        </div>
          <SearchBar
            handleSearch={this.props.handleSearch}
            loading={this.props.loading}
          />
        {dropdown}
      </div>
    );
  }
}

export default NavBar;
