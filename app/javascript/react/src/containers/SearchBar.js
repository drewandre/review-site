import React, { Component } from 'react'
import SearchField from '../components/SearchField'

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      errors: {},
      query: '',
      // onlyReviews: false,
      lastKeyPressedTime: 0
    }
    this.handleSearch = this.handleSearch.bind(this);
    this.handleOptions = this.handleOptions.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.validateSearch = this.validateSearch.bind(this);
  }

  handleFormSubmit(e) {
    e.preventDefault();

    if (Date.now() - this.state.lastKeyPressedTime > 1000) {

      let joinedQuery = "?q="
      if(this.validateSearch(e)) {
        joinedQuery+=this.state.query.split(' ').map(word => `${word.trim()}`).join('+');

        // let formPayLoad = { query: joinedQuery, onlyReviews: this.state.onlyReviews };
        // this.props.submission(formPayLoad);

        fetch(`http://api.github.com/search/repositories${joinedQuery}&sort=stars&order=desc`)
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
        .then(body => { this.props.handleSearch(body.items) })
        .catch(error => console.error(`Error in fetch: ${error.message}`));
        this.props.loading(false)
      }
    } // end Date.now check
  }

  handleOptions(e) {
    this.setState({ onlyReviews: !this.state.onlyReviews })
  }

  handleSearch(e) {
    this.props.handleSearch([])
    this.setState({ lastKeyPressedTime: Date.now() })
    if (this.validateSearch(e.target.value)) {
      this.setState({ query: e.target.value.toLowerCase() })
    }
    setTimeout(() => this.handleFormSubmit(e), 1000);
  }

  validateSearch(search) {
    if (search === '') {
      this.props.loading(false);
      this.props.handleSearch([])
      let newError = { search: 'Search field may not be blank.' }
      this.setState({ errors: Object.assign(this.state.errors, newError) })
      return false
    } else {
      this.props.loading(true);
      let errorState = this.state.errors
      delete errorState.search
      this.setState({ errors: errorState })
      return true
    }
  }

  render() {
    let errorDiv;
    let errorItems;
    if (Object.keys(this.state.errors).length > 0) {
      errorItems = Object.values(this.state.errors).map(error => {
        return(<div key={error}>{error}</div>)
      })
      errorDiv = <div>{errorItems}</div>
    }

    return(
      // <form onSubmit={this.handleFormSubmit}>
      <SearchField
        handlerFunction={this.handleSearch}
        placeholder="Search GitHub repositories"
      />
    );
  }

}

export default SearchBar;
